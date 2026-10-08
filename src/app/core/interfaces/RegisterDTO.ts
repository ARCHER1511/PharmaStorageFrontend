export interface RegisterDTO {
    fullName: string;
    phoneNumber: string;
    jobTitle: string;
    email: string;
    password: string;
    confirmPassword: string;
    contractedCompanyName: string;
    nationalIdNumber: string;

    nationalIdFrontImage: File | null;
    nationalIdBackImage: File | null;
    authorizationLetterFile: File | null;
}