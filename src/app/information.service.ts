import { Injectable } from "@angular/core";
import { JobViewData } from "./jobs-view/jobViewData";

@Injectable({
  providedIn: "root"
})
export class InformationService {
  location: string;
  skills: string;
  experience: number;
  jobid: string;
  jobviewlist: JobViewData[];
  noOfDays: number;
  noOfWeeks: number;
  noOfMonths: number;
  currentDate: Date = new Date();
  days: any = 1000 * 60 * 60 * 24;
  constructor() {}

  jobs(filterjob: any) {
    for (let i of filterjob) {
      let secondDate = new Date(this.currentDate);
      let firstDate = new Date(i.created);
      let diffInDays = Math.round(
        Math.abs((secondDate.getTime() - firstDate.getTime()) / this.days)
      );
      let noOfWeeks = Math.floor(diffInDays / 7);
      let noOfMonths = Math.floor(diffInDays / 30);
      i.noOfDays = diffInDays;
      i.noOfWeeks = noOfWeeks;
      i.noOfMonths = noOfMonths;
      i.jobValid = new Date(i.enddate) > new Date(this.currentDate);
    }
  }
  postJobUrl = "https://lit-bastion-66541.herokuapp.com/byjusjobs/job/listed";
  jobSearch = "https://lit-bastion-66541.herokuapp.com/byjusjobs/jobs";
  jobbylocationurl =
    "https://lit-bastion-66541.herokuapp.com/byjusjobs/jobsin/";
  jobbyskillsurl =
    "https://lit-bastion-66541.herokuapp.com/byjusjobs/jobs-for/";
  jobbyExpurl =
    "https://lit-bastion-66541.herokuapp.com/byjusjobs/jobs-experience/";
  jobbyidurl = "https://lit-bastion-66541.herokuapp.com/byjusjobs/jobs/";
}
