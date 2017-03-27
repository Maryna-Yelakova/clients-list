export class General {
    firstName: string;
    lastName: string;
    avatar: string;
  }
export class Job {
    company: string;
    title: string;
}
export class Contact {
    email: string;
    phone: string;
}
export class Address {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}
export class Client {
    general: General;
    job: Job;
    contact: Contact;
    adress: Address;

}

