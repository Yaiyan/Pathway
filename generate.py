import pprint
import json
import os

from jinja2 import Template

topics = {}

for topic_file in os.listdir('data/topics'):
    if topic_file[0] == '.':
        continue
    with open('data/topics/'+topic_file) as json_file:
        try:
            topic = json.load(json_file)
        except:
            print topic_file
        topic['leads_to'] = []
        topic['completed'] = False
        topics[topic['id']] = topic

for topic in topics:
    for required in topics[topic].get('requires', []):
        if required not in topics[required]['leads_to']:
            topics[required]['leads_to'].append(topics[topic]['id'])

topics_json = json.dumps(topics)

with open('template.html') as template_file:
    template = Template(template_file.read())
    with open('index.html', 'w') as out_file:
        out_file.write(template.render(topics = topics_json))
