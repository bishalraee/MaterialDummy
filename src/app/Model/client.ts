export interface Client {
    username:string;
    password:string;
    phone:number;
    course:string[]; //as the course selected can be multiple hence an array
    feedback:string;
}
