#include<stdio.h>

int main(){
    FILE *fp;
    fp=fopen("put.txt","w");
    fputs("This is c programming.\n",fp);
    fputs("This is a system programming language.",fp);
    fclose(fp);
    return 0;
}