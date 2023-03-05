# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here  
#### Add customId field to Agent  

**Acceptance criteria**  
New `customId` field is present in Agent DB modal and REST API. 

**Implementation details**  
* new `customId` field should be added to Agent DB model and populated to REST API methods

**Time/effort estimates**  
4h

---

#### Add ability for Facility to set custom ID of Agent

**Acceptance criteria**  
As a Facility I want to be able to set optional custom ID for each Agent we work with in Agent details form.

**Implementation details**  
* new `customId` field should be added in JS app data layer
* corresponding `customId` text form input should be added to Agent details form

**Time/effort estimates**  
4h

---

#### Add Agent custom ID to getShiftsByFacility function

**Acceptance criteria**  
New Agent custom ID property should be included in each Agent metadata included in each Shift in `getShiftsByFacility` return data.

**Implementation details**  
* update `getShiftsByFacility` return schema to include customId field in Agent metadata included in each Shift

**Time/effort estimates**  
2h

---

#### Update generateReport function to use Agent custom ID 

**Acceptance criteria**  
`generateReport` function should utilise newly added customId field included in each Shift Agent metadata. Right now it utilises Agent ID taken from DB when generating reports.

**Implementation details**  
* replace `id` with `customId` field in PDF template in `generateReport` function

**Time/effort estimates**  
2h