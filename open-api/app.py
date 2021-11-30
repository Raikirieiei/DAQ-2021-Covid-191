import sys
import os
from flask_cors import CORS

if not os.path.exists("config.py"):
    print("Configuration 'config.py' not found.  "
          "You may create one from 'config.py.example'.")
    exit(1)

from config import OPENAPI_AUTOGEN_DIR

if not os.path.exists(OPENAPI_AUTOGEN_DIR):
    print("Folder '{}' not found.  "
          "Execute openapi-generator to generate it, "
          "e.g.,".format(OPENAPI_AUTOGEN_DIR))
    print()
    print("  "
          "java -jar openapi-generator-cli-4.3.1.jar generate \\\n"
          "     -i openapi/covid-191.yaml \\\n"
          "     -o {} -g python-flask".format(OPENAPI_AUTOGEN_DIR))
    print()
    exit(1)

sys.path.append(OPENAPI_AUTOGEN_DIR)

try:
    import connexion
except ModuleNotFoundError:
    print("Please install all required packages by running:"
          " pip install -r requirements.txt")
    exit(1)

from openapi_server import encoder



def main():
  
    app = connexion.App(__name__, specification_dir='./openapi/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('covid-191.yaml',
                arguments={'title': 'Covid-191 API'},
                pythonic_params=True)
    CORS(app.app)
    app.run(port=8080, debug=True)


if __name__ == '__main__':
    main()
