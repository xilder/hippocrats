#!/usr/bin/python3
from models.base_model import BaseModel
from models import storage
from models.option import Option
from models.question import Question
from models.user import User

# dami = User(
#     first_name="Abel",
#     last_name="Fagbemi",
#     user_name="xldr",
#     email="abel.fagbemi@med.uniben.edu",
#     password="Big Bunda"
#     )
# q_1 = Question(
#     user_id=dami.id,
#     clinical="clinical",
#     course="Surgery",
#     sub_course="",
#     question_type="MCQ",
#     question_text="In fluid replacement therapy in hypovolaemic shock, the following are cardinal variables to monitor"
#     )

# opt_a = Option(
#     user_id=dami.id,
#     question_id=q_1.id,
#     option="a",
#     option_text="Peripheral oxygen saturation",
#     valid="F"
# )

# opt_b = Option(
#     user_id=dami.id,
#     question_id=q_1.id,
#     option="b",
#     option_text="Urine output",
#     valid="T"
# )

# opt_c = Option(
#     user_id=dami.id,
#     question_id=q_1.id,
#     option="c",
#     option_text="Temperature",
#     valid="T"
# )

# opt_d = Option(
#     user_id=dami.id,
#     question_id=q_1.id,
#     option="c",
#     option_text="Pulse",
#     valid="T"
# )

# opt_e = Option(
#     user_id=dami.id,
#     question_id=q_1.id,
#     option="e",
#     option_text="Mental state",
#     valid="T"
# )

users = storage.all(User)
for user in users.values():
    print(user)
questions = storage.all(Question)
for q in questions.values():
    for opt in q.options:
        print(opt)