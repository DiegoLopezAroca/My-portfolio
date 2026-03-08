import urllib.request
import json
req = urllib.request.Request('https://api.github.com/users/DiegoLopezAroca/repos', headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read())
    print("\n".join([r['name'] for r in data]))
