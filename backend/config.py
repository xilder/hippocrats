from redis import Redis
from dotenv import load_dotenv
from os import environ

load_dotenv()

class ApplicationConfig:
    SECRET_KEY=environ["SECRET_KEY"]
    USER=environ["USER"]
    PWD=environ["PWD"]
    HOST=environ["HOST"]
    DB=environ["DB"]
    ENV_DB=environ["ENV_DB"]
    SESSION_TYPE="redis"
    SESSION_REDIS=Redis.from_url('redis://127.0.0.1:6379')