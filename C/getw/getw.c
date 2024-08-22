#include<stdio.h>

int main(){
    FILE *fp;
    int i;
    //open file for writing
    fp=fopen("numberic.txt","w");
    for(i=1;1<=10;i++){
        putw(i,fp);
    }
    fclose(fp);
    fp=fopen("numberic.txt","r");
    for(i=1;i<=10;i++){
        i=getw(fp);
        printf("%d",i);
    }
    fclose(fp);
    return 0;
}