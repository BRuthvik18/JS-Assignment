class User{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.addcoins=0;
        this.losecoins=0
        this.courses=[];
    }
    login()
    {
        console.log(`this is ${this.name} has logged in`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
    }
}
class Moderator extends User{
 super(name,age,email,addcoins,losecoins)
 {
    
     this.addcoins=0;
     this.losecoins=0;

 }   
 addcoins1(User)
 {
     this.addcoins++;
     console.log(`${this.name} has ${this.addcoins}`);
     return this;
 }
 losecoins1(User)
 {
   this.losecoins--;
   console.log(`${this.name} has lost ${this.losecoins}`);
    return this;
 }
}
class admin extends Moderator

{ 
    constructor(name,age,email,addcoins,losecoins,course)
    {
    super(name,age,email,addcoins,losecoins)
    this.course="admin";
    }
    addcourse(User,courses)
    {
        User.courses.push(courses);
        console.log(User);
    }
    deletecourse(User,course)
    {
        users=users.filter(u=>{ return u.addcoins!=User.addcoins})

    }
}
let user1=new User("ram",25,"ram@gmail.com");
let user2=new User("Krishna ",27,"krishna@gmail.com");
let mod=new Moderator("Arjun",24,"Arjun@gmail.com",3);
let mod2=new Moderator("Bheem",29,"Bhemm@gmail.com",6);
let madhav=new admin("Vasudev",30,"Vasudev@gmail.com")
let madhav1=new admin("Vasudev1",30,"Vasudev9@gmail.com","c")
let users=[user1,user2,mod,mod2,madhav];
mod.login().addcoins1().losecoins1();
madhav.addcourse(user1,"python");