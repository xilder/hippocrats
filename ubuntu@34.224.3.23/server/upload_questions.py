from models import storage
from models.user import User
from models.question import Question
from models.option import Option
from models.explanation import Explanation
import json
questions = []

with open("final.json", "r") as f:
    questions = json.load(f)

first_user = User(first_name="Abel", last_name="Fagbemi", email="olabowaleayobami@gmail.com", password="Syzygy96", username="xilder")
first_user.save()
# for k, v in storage.all("User"):
    # print(v)
u_id = first_user.id

q = list(storage.all("User").values())
for qa in q:
    print(qa)

total = 0

for question in questions:
    q = Question(user_id=u_id, course="PLAB", type="SBA", text=question["question"])
    q.save()
    e = Explanation(user_id=u_id, question_id=q.id, text=question["explanation"])
    e.save()
    for option in question["options"]:
        o = Option(user_id=u_id, question_id=q.id, option=option["option"], valid=option["valid"], text=option["option_text"])
        o.save()
    total = total + 1
    print(total)