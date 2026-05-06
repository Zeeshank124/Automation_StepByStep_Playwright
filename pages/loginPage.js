exports.LoginPage=class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });

    }
    async navigateToLoginPage(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }
    async enterUsername(username){
        await this.username.click();
        await this.username.fill(username);
        
    }
    async enterPassword(password){
        await this.password.click();
        await this.password.fill(password);
    }
    async   clickSubmit(){
        await this.submitButton.click();
    }
}