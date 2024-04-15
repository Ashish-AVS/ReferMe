import requests
from bs4 import BeautifulSoup
import re
import json

def cisco_jobs():

    mapping = {
        'Job Title': 'Job Title',
        'href': 'Job url',
        'Actions': 'Actions',
        'job_description': 'Job Description',
        'Area of Interest': 'Job Category',
        'Location': 'Location'
    }

    def get_job_description(job_url):
        response = requests.get(job_url)
        if response.status_code == 200:
            jd = BeautifulSoup(response.content, 'html.parser')
            job_description = jd.find('div', class_='job_description')
            return str(job_description) if job_description else ""
        return ""
    
    offset = 0
    jobs = []
    
    while True:
        url = f"https://jobs.cisco.com/jobs/SearchJobs/?projectOffset={offset}"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')    

        table = soup.find('table')  # Assuming the table is present

        if not table:
            break

        for row in table.find_all('tr'):
            temp = {}
            for cell in row.find_all('td'):
                data_type = cell.get('data-th')
                if data_type not in mapping:
                    continue
                temp[mapping[data_type]] = cell.get_text()
                link = cell.find('a')
                if link:
                    temp[mapping['href']] = link['href']
                    temp[mapping['job_description']] = get_job_description(link['href'])
            jobs.append(temp)

        next_href = soup.find_all('a', href=re.compile(r'projectOffset=(\d+)'))[-1]
        next_offset = int(re.search(r'projectOffset=(\d+)', next_href['href']).group(1))
        if next_offset <= offset:
            break
        offset = next_offset

    return jobs

def apple_jobs():

    def get_job_description(job_url):
        response = requests.get(job_url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            jd_description = soup.find_all('div', id='jd-description')
            if jd_description:
                return jd_description[0].get_text(strip=True)
        return ""

    url = "https://jobs.apple.com/api/role/search"
    payload = {
        "query": "",
        "filters": {
            "range": {"standardWeeklyHours": {"start": None, "end": None}}
        },
        "page": 1,
        "locale": "en-in",
        "sort": ""
    }
    jobs = []

    while True:
        response = requests.post(url, json=payload)
        if response.status_code != 200:
            print("Error:", response.status_code)
            return jobs

        total_jobs = response.json()["totalRecords"]
        search_results = response.json()["searchResults"]

        for result in search_results:
            job_id = result["positionId"]
            role = result['transformedPostingTitle']
            team = result["team"]["teamCode"]
            job_url = f"https://jobs.apple.com/en-in/details/{job_id}/{role}?team={team}"
            job_category = "Internship" if "intern" in role.lower() else "Professional"

            job = {
                "Job Title": result["postingTitle"],
                "Job url": job_url,
                "Actions": result["team"]["teamName"],
                "Job Description": get_job_description(job_url),
                "Job Category": job_category
            }
            for location in result["locations"]:
                job["Location"] = location["name"]
                jobs.append(job)
            import pdb; pdb.set_trace()

        if len(jobs) < total_jobs:
            payload["page"] += 1
        else:
            break

    return jobs

def amazon_jobs():
    offset = 0
    jobs_db = []
    while True:
        base_url = f"https://www.amazon.jobs/en/search.json?offset={offset}&result_limit=100"
        response = requests.get(base_url)
        if response.status_code == 200:
            jobs = response.json()
            if 'jobs' not in jobs or jobs['jobs'] is None:
                print(f"Error: {jobs}")
                break
            for job in jobs['jobs']:
                place_holder = {}
                place_holder['Job url']  = f"https://www.amazon.jobs/en-gb/jobs/{job['id_icims']}"
                place_holder['Job Title'] = job['title']
                place_holder['Job Description'] = job['description']
                place_holder['Actions'] = job['job_family']
                place_holder['Job Category'] = "Internship" if "intern" in job['title'].lower() else "Professional"
                for location in job['locations']:
                    location = json.loads(location)
                    try:
                        place_holder['Location'] = location["normalizedCountryName"]
                    except:
                        place_holder['Location'] = location["location"]
                    jobs_db.append(place_holder)
            offset += 100
            if len(jobs['jobs']) < 100:
                # if the number of jobs is less than 100, then we have reached the end of the jobs
                break
        else:
            print(f"Error: {response.status_code}, base_url: {base_url}")
    return jobs_db

if __name__ == '__main__':
    cisco_jobs_db = cisco_jobs()
    apple_jobs_db = apple_jobs()
    amazon_jobs_db = amazon_jobs()
    jobs = cisco_jobs_db + apple_jobs_db + amazon_jobs_db

