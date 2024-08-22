#include<stdio.h>
#include<conio.h>
#include<string.h>
int main(){
    FILE *fp;
    char data[25]="Welcome to Your World.";
    int length=strlen(data);
    int i;
    fp=fopen("your world.txt","w");
    if(fp==NULL){
        printf("Unable to create or open file");
    }
    else{
        for(i=0;i<length;i++){
            printf("Writing the character %c\n",data[i]);
        }
    }  
    fputc(data[i],fp);{
        printf("data written to the file successfully");
        fclose(fp);
    }
    fp=fopen("your world.txt","r");
    char ch;
    printf("Reading data from the file:\n");
    while((ch=fgetc(fp))!=EOF){
        putchar(ch);
    }
    fclose(fp);
    return 0;
}