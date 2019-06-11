


export interface Language {
    title: string
    auth: {
        input_name: string
        input_lastname: string
        input_email: string
        input_password: string
        input_passwordConfirm: string
        input_phone: string
        check_terms: string

        signUp_button: string
        signIn_button: string
        signGoogle_button: string
        signFacebook_button: string
    }

    footer: {
        tabChats: string
        tabHistory: string
    }
}