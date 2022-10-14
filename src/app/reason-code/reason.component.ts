import { Component } from "@angular/core";

@Component({
    selector: "reason-code",
    templateUrl: "./reason.component.html",
    styleUrls: ["./reason.component.css"]
})
export class ReasonCode {
    headers = ["code", "description", "rank number"];
    rows: any[] = [
        {
            "code": "AA",
            "description" : "test",
            "rank number" : "1"
        },
        {
            "code": "BB",
            "description" : "test",
            "rank number" : "2"
        },
        {
            "code": "CC",
            "description" : "test",
            "rank number" : "3"
        }

    ]
}