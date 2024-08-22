#include <stdio.h>
#include<conio.h>
#include <string.h>

struct user {
    char ac[50];
    char phone[50];
    char password[50];
    float balance;
};

int main(){
    struct user usr, usr1;
    FILE *fp;
    char filename[50], phone[50], pword[50];
    int opt, choice;
    char cont = 'y';
    float amount;
    
    printf("\n\t\t\t\t\t\t\t NAMASTE");
    printf("\n\t\t\t\t\t Welcome to CLOUD BANK SYSTEM SOFTWARE");
    printf("\n\t\t\t\t\t\t DEVELOPED BY PRIYANSHU THAKUR");
   
    printf("\n\n What do you want to do?");
    
    printf("\n\n1. Register an account");
    
    printf("\n2. Login to an account");

    printf("\n\nYour choice:\t");
    scanf("%d", &opt);

    if(opt == 1) {
        printf("Enter your account number:\t");
        scanf("%s", usr.ac);
        printf("Enter your phone number:\t");
        scanf("%s", usr.phone);
        printf("Enter your new password:\t");
        scanf("%s", usr.password);
        usr.balance = 0;
        strcpy(filename, usr.phone);
        fp = fopen(strcat(filename, "Username"), "w");
        if (fp == NULL) {
            printf("\n\nSomething went wrong please try again");
            return 1;
        }
        if (fwrite(&usr, sizeof(struct user), 1, fp) == 1) {
            printf("\n\nAccount successfully registered");
        } else {
            printf("\n\nSomething went wrong please try again");
        }
        fclose(fp);
    }

    if(opt == 2) {
        printf("\nPhone number:\t");
        scanf("%s", phone);
        printf("Password:\t");
        scanf("%s", pword);
        strcpy(filename, phone);
        fp = fopen(strcat(filename, "Username"), "r");
        if(fp == NULL) {
            printf("\nAccount number not registered");
        } else {
            fread(&usr, sizeof(struct user), 1, fp);
            fclose(fp);
            if(!strcmp(pword, usr.password)) {
                printf("\n\t\tWelcome %s", usr.phone);
                while(cont == 'y') {
                    printf("\n\nPress 1 for balance inquiry");
                    printf("\nPress 2 for depositing cash");
                    printf("\nPress 3 for cash withdrawal");
                    printf("\nPress 4 for online transfer");
                    printf("\nPress 5 for password change");
                    printf("\n\nYour choice:\t");
                    scanf("%d", &choice);

                    switch(choice) {
                        case 1:
                            printf("\nYour current balance is Rs.%.2f", usr.balance);
                            break;
                        case 2:
                            printf("\nEnter the amount:\t");
                            scanf("%f", &amount);
                            usr.balance += amount;
                            fp = fopen(filename, "w");
                            if (fp == NULL) {
                                printf("\n\nSomething went wrong please try again");
                                break;
                            }
                            if (fwrite(&usr, sizeof(struct user), 1, fp) == 1) {
                                printf("\nSuccessfully deposited.");
                            }
                            fclose(fp);
                            break;
                        case 3:
                            printf("\nEnter the amount:\t");
                            scanf("%f", &amount);
                            usr.balance -= amount;
                            fp = fopen(filename, "w");
                            if (fp == NULL) {
                                printf("\n\nSomething went wrong please try again");
                                break;
                            }
                            if (fwrite(&usr, sizeof(struct user), 1, fp) == 1) {
                                printf("\nYou have withdrawn Rs.%.2f", amount);
                            }
                            fclose(fp);
                            break;
                        case 4:
                            printf("\nPlease enter the phone number to transfer the balance:\t");
                            scanf("%s", phone);
                            printf("\nPlease enter the amount to transfer:\t");
                            scanf("%f", &amount);
                            strcpy(filename, phone);
                            fp = fopen(strcat(filename, "Username"), "r");
                            if(fp == NULL) {
                                printf("\nAccount number not registered");
                            } else {
                                fread(&usr1, sizeof(struct user), 1, fp);
                                fclose(fp);
                                if(amount > usr.balance) {
                                    printf("\nInsufficient balance");
                                } else {
                                    fp = fopen(filename, "w");
                                    if (fp == NULL) {
                                        printf("\n\nSomething went wrong please try again");
                                        break;
                                    }
                                    usr1.balance += amount;
                                    fwrite(&usr1, sizeof(struct user), 1, fp);
                                    fclose(fp);
                                    strcpy(filename, usr.phone);
                                    fp = fopen(strcat(filename, "Username"), "w");
                                    if (fp == NULL) {
                                        printf("\n\nSomething went wrong please try again");
                                        break;
                                    }
                                    usr.balance -= amount;
                                    fwrite(&usr, sizeof(struct user), 1, fp);
                                    fclose(fp);
                                    printf("\nYou have successfully transferred Rs.%.2f to %s", amount, phone);
                                }
                            }
                            break;
                        case 5:
                            printf("\nPlease enter your new password:\t");
                            scanf("%s", pword);
                            fp = fopen(filename, "w");
                            if (fp == NULL) {
                                printf("\n\nSomething went wrong please try again");
                                break;
                            }
                            strcpy(usr.password, pword);
                            if (fwrite(&usr, sizeof(struct user), 1, fp) == 1) {
                                printf("\nPassword successfully changed");
                            }
                            fclose(fp);
                            break;
                        default:
                            printf("\nInvalid option");
                    }

                    printf("\nDo you want to continue the transaction [y/n]\t");
                    scanf(" %c", &cont);
                }
            } else {
                printf("\nInvalid password");
            }
        }
    }

    return 0;
}
