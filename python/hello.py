RED = "\033[31m"
GREEN = "\033[32m"
RESET ="\033[0m"

Name= input("name:")
Age = int(input("age:"))
greeting = f"HEllo, My name is {RED} {Name} {RESET} and I am {GREEN} {Age} {RESET} years old."
print(greeting)