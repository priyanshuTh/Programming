#include<stdio.h>

int main(){
    FILE *fptr;
    int id;
    char name[30];
    float salary;
    fptr=fopen("example.txt","w");/*open for writing*/
    if(fptr==NULL){
        printf("File doesnot exists\n");
        return 0;
    }
    printf("Enter id:\n");
    scanf("%d",&id);
    fprintf(fptr,"Id=%d\n",id);
    printf("Enter name:\n");
    scanf("%s",name);
    fprintf(fptr,"Name=%s\n",name);
    printf("Enter salary:\n");
    scanf("%f",&salary);
    fprintf(fptr,"Salary=%.2f\n",salary);
    fptr=fopen("example.txt","r");
    char ch;
    while((ch=fgetc(fptr))!=EOF){
        putchar(ch);
    }
    fclose(fptr);
    return 0;
}