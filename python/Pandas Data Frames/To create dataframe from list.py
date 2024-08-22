import pandas as pd
Subject=['Maths','History','Science','English','Georaphy','Art']
Marks=[45,65,78,65,80,78]
CGPA=[2.5,3.0,3.5,2.0,4.0,4.0]
df=pd.DataFrame([Subject,Marks, CGPA], index=['subject', 'Marks', 'CGPA']).T
##'T' stands for transpose to present data in verticle form.
print(df)