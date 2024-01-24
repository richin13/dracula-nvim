import re
from typing import Self

my_list = [1, 2, 3, 4, 5]
my_dict = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
my_string = "Hello, world!"
my_number = 42
my_boolean = True

def my_function(my_param):
  print("This is a function.", my_param)

if my_number > 0:
  print("The number is positive.")
elif my_number < 0:
  print("The number is negative.")
else:
  print("The number is zero.")

for i in my_list:
  print(i)

while my_number < 50:
  print(my_number)
  my_number += 10

if re.search("hello", my_string, re.IGNORECASE):
  print("Greeting!")
elif re.search("goodbye", my_string, re.IGNORECASE):
  print("Farewell!")
else:
  print("I don't understand.")

try:
  my_function()
except Exception as e:
  print(e)
finally:
  print("Done.")


class Appt(object):
    """Some docstring."""

    class Meta:
        var = "foo"
        foo = f"bar{my_number}"

    def __init__(self) -> None:
      pass

    def meta(self) -> Self:
        """Meta"""
        return self
