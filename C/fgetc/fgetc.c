#include<stdio.h>
#include<conio.h>
int main(){
    FILE *fp;
    char c;
    fp=fopen("student.txt","w");
    if(fp==NULL)
    {
        printf("file not found");
        return 0;
        }
        else
        {
            printf("file found");
            while((c=getchar())!=EOF)
            fprintf(fp,"%c",c);
            }
    fp=fopen("student.txt","r");
    while((c=fgetc(fp))!=EOF){
        printf("%c",c);
    }
    fclose(fp);
    return 0;
}