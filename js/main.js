/*                                 github.com/7yasin                                   */

    async function checkPassword() {

        function changeStatus(id, val) {
            
            if(!id || !val) return;

            var element = document.getElementById(id);
            if(element.classList.contains(val === "t" ? "applied" : "napplied")) return;

            element.classList = [];
            element.classList.toggle(val === "t" ? "applied" : "napplied")
        }
        
        var password = document.getElementById("floatingPassword").value;
        if(!password) password = " "

        var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var spaceChar = /\s/g;
        var numberChar = /\d/;
        var textChar = /^[^a-zA-Z]+$/;
        var check = true;

        function checkThis(char, elementID, contains) {
            if(contains) {
                if(!char.test(password)) {
                    changeStatus(elementID, "f")
                    check = false;
                } else {
                   changeStatus(elementID, "t")
    
                }
                return;
            }

            if(char.test(password)) {
                changeStatus(elementID, "f")
                check = false;
            } else {
               changeStatus(elementID, "t")

            }
        }

        /* char check */

            checkThis(spaceChar, "nospace")
            checkThis(specialChar, "special", true)
            checkThis(numberChar, "number", true)

        /* char check */

        /* 8 Characters Check */
    
        if(password.length >= 8) {
            console.log("geldi")
            changeStatus("characters", "t") 
            } else { 
                changeStatus("characters", "f")
                check = false;
            }

        /* 8 Characters Check */


        if(check) {
            document.getElementById("signBttn").disabled = false;
        } else {
            document.getElementById("signBttn").disabled = true;

        }


    }



/*                                 github.com/7yasin                                   */
