// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User {
    constructor(username, password) {
      this._username = username;
      this._password = password;
    }
  
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
        console.log("Password successfully updated.");
      } else {
        console.error(
          "Error: Invalid password. Please ensure it is at least 8 characters long and contains at least one number and one uppercase letter."
        );
      }
    }
  
    get username() {
      return this._username;
    }
  }
  
  // Example usage:
  const user = new User("Krishna", "PAssP@ssw0rd");
  console.log(`Username: ${user.username}`);
  console.log(`Password: ${user.password}`);
  
  // Try to set a new valid password
  user.password = "NewP@ssw0rd";
  
  // Try to set an invalid password
  user.password = "weak";
  
