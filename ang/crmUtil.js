function ts(english) {
    return english;
}

var CRM = {
    "config": { "isFrontend": false, "wysisygScriptLocation": "\/wp-content\/plugins\/civicrm\/civicrm\/js\/wysiwyg\/crm.ckeditor.js", "CKEditorCustomConfig": { "default": "https:\/\/www.dev.agloa.org\/wp-content\/uploads\/civicrm\/persist\/crm-ckeditor-default.js" } }, "menubar": { "position": "over-cms-menu", "qfKey": "1a66b02e8a3e8f1a2b8c0e035ce749e9_5031", "cacheCode": "FrnSLFrh" }, "crmApp": { "defaultRoute": null }, "angularRoute": null, "crmMailing": {
        "templateTypes": [{ "weight": 0, "name": "traditional", "editorUrl": "~\/crmMailing\/EditMailingCtrl\/2step.html" }], "civiMails": [], "campaignEnabled": false, "groupNames": [], "testGroupNames": [{ "id": "1", "title": "Administrators", "visibility": "User and User Admin Only", "group_type": ["1"], "is_hidden": "0" }], "headerfooterList": [{ "id": "1", "name": "Mailing Header", "component_type": "Header", "is_default": "1", "body_html": "Sample Header for HTML formatted content.", "body_text": "Sample Header for TEXT formatted content." }, { "id": "2", "name": "Mailing Footer", "component_type": "Footer", "is_default": "1", "body_html": "Sample Footer for HTML formatted content<br\/><a href=\"{action.optOutUrl}\">Unsubscribe<\/a>  <br\/> {domain.address}", "body_text": "to unsubscribe: {action.optOutUrl}\n{domain.address}" }, { "id": "3", "name": "Subscribe Message", "component_type": "Subscribe", "is_default": "1", "body_html": "You have a pending subscription to the {subscribe.group} mailing list. To confirm this subscription, reply to this email or click <a href=\"{subscribe.url}\">here<\/a>.", "body_text": "You have a pending subscription to the {subscribe.group} mailing list. To confirm this subscription, reply to this email or click on this link: {subscribe.url}" }, { "id": "4", "name": "Welcome Message", "component_type": "Welcome", "is_default": "1", "body_html": "Welcome. Your subscription to the {welcome.group} mailing list has been activated.", "body_text": "Welcome. Your subscription to the {welcome.group} mailing list has been activated." }, { "id": "5", "name": "Unsubscribe Message", "component_type": "Unsubscribe", "is_default": "1", "body_html": "You have been un-subscribed from the following groups: {unsubscribe.group}. You can re-subscribe by mailing {action.resubscribe} or clicking <a href=\"{action.resubscribeUrl}\">here<\/a>.", "body_text": "You have been un-subscribed from the following groups: {unsubscribe.group}. You can re-subscribe by mailing {action.resubscribe} or clicking " }, { "id": "6", "name": "Resubscribe Message", "component_type": "Resubscribe", "is_default": "1", "body_html": "You have been re-subscribed to the following groups: {resubscribe.group}. You can un-subscribe by mailing {action.unsubscribe} or clicking <a href=\"{action.unsubscribeUrl}\">here<\/a>.", "body_text": "You have been re-subscribed to the following groups: {resubscribe.group}. You can un-subscribe by mailing {action.unsubscribe} or clicking {action.unsubscribeUrl}" }, { "id": "7", "name": "Opt-out Message", "component_type": "OptOut", "is_default": "1", "body_html": "Your email address has been removed from {domain.name} mailing lists.", "body_text": "Your email address has been removed from {domain.name} mailing lists." }, { "id": "8", "name": "Auto-responder", "component_type": "Reply", "is_default": "1", "body_html": "This is an automated reply from an un-attended mailbox. Please send any inquiries to the contact email address listed on our web-site.", "body_text": "This is an automated reply from an un-attended mailbox. Please send any inquiries to the contact email address listed on our web-site." }], "mesTemplate": [{ "id": "65", "msg_title": "Sample CiviMail Newsletter Template" }, { "id": "66", "msg_title": "Sample Responsive Design Newsletter - Single Column Template" }, { "id": "67", "msg_title": "Sample Responsive Design Newsletter - Two Column Template" }], "emailAdd": [{ "id": "2", "email": "cio@agloa.org" }], "mailTokens": [{ "text": "Action", "children": [{ "id": "{action.forward}", "text": "Forward this email (link)" }, { "id": "{action.optOut}", "text": "Opt out via email" }, { "id": "{action.optOutUrl}", "text": "Opt out via web page" }, { "id": "{action.reply}", "text": "Reply to this email (link)" }, { "id": "{action.resubscribe}", "text": "Resubscribe via email" }, { "id": "{action.resubscribeUrl}", "text": "Resubscribe via web page" }, { "id": "{action.subscribeUrl}", "text": "Subscribe via web page" }, { "id": "{action.unsubscribe}", "text": "Unsubscribe via email" }, { "id": "{action.unsubscribeUrl}", "text": "Unsubscribe via web page" }] }, { "text": "Address", "children": [{ "id": "{contact.address_id}", "text": "Address ID" }, { "id": "{contact.address_name}", "text": "Address Name" }, { "id": "{contact.city}", "text": "City" }, { "id": "{contact.country}", "text": "Country" }, { "id": "{contact.county}", "text": "County" }, { "id": "{contact.manual_geo_code}", "text": "Is Manually Geocoded" }, { "id": "{contact.geo_code_1}", "text": "Latitude" }, { "id": "{contact.geo_code_2}", "text": "Longitude" }, { "id": "{contact.master_id}", "text": "Master Address Belongs To" }, { "id": "{contact.postal_code}", "text": "Postal Code" }, { "id": "{contact.postal_code_suffix}", "text": "Postal Code Suffix" }, { "id": "{contact.state_province}", "text": "State" }, { "id": "{contact.street_address}", "text": "Street Address" }, { "id": "{contact.street_name}", "text": "Street Name" }, { "id": "{contact.street_number}", "text": "Street Number" }, { "id": "{contact.street_number_suffix}", "text": "Street Number Suffix" }, { "id": "{contact.street_unit}", "text": "Street Unit" }, { "id": "{contact.supplemental_address_1}", "text": "Supplemental Address 1" }, { "id": "{contact.supplemental_address_2}", "text": "Supplemental Address 2" }, { "id": "{contact.supplemental_address_3}", "text": "Supplemental Address 3" }] }, { "text": "Contact", "children": [{ "id": "{contact.addressee}", "text": "Addressee" }, { "id": "{contact.addressee_id}", "text": "Addressee ID" }, { "id": "{contact.birth_date}", "text": "Birth Date" }, { "id": "{contact.checksum}", "text": "Checksum" }, { "id": "{contact.communication_style}", "text": "Communication Style" }, { "id": "{contact.hash}", "text": "Contact Hash" }, { "id": "{contact.contact_is_deleted}", "text": "Contact is in Trash" }, { "id": "{contact.contact_source}", "text": "Contact Source" }, { "id": "{contact.contact_type}", "text": "Contact Type" }, { "id": "{contact.created_date}", "text": "Created Date" }, { "id": "{contact.current_employer}", "text": "Current Employer" }, { "id": "{contact.current_employer_id}", "text": "Current Employer ID" }, { "id": "{contact.display_name}", "text": "Display Name" }, { "id": "{contact.do_not_email}", "text": "Do Not Email" }, { "id": "{contact.do_not_mail}", "text": "Do Not Mail" }, { "id": "{contact.do_not_phone}", "text": "Do Not Phone" }, { "id": "{contact.do_not_sms}", "text": "Do Not Sms" }, { "id": "{contact.do_not_trade}", "text": "Do Not Trade" }, { "id": "{contact.email}", "text": "Email" }, { "id": "{contact.email_greeting}", "text": "Email Greeting" }, { "id": "{contact.email_greeting_id}", "text": "Email Greeting ID" }, { "id": "{contact.external_identifier}", "text": "External Identifier" }, { "id": "{contact.first_name}", "text": "First Name" }, { "id": "{contact.formal_title}", "text": "Formal Title" }, { "id": "{contact.gender}", "text": "Gender" }, { "id": "{contact.image_URL}", "text": "Image Url" }, { "id": "{contact.im_provider}", "text": "IM Provider" }, { "id": "{contact.im}", "text": "IM Screen Name" }, { "id": "{contact.individual_prefix}", "text": "Individual Prefix" }, { "id": "{contact.individual_suffix}", "text": "Individual Suffix" }, { "id": "{contact.contact_id}", "text": "Internal Contact ID" }, { "id": "{contact.job_title}", "text": "Job Title" }, { "id": "{contact.last_name}", "text": "Last Name" }, { "id": "{contact.location_type}", "text": "Location Type" }, { "id": "{contact.middle_name}", "text": "Middle Name" }, { "id": "{contact.modified_date}", "text": "Modified Date" }, { "id": "{contact.nick_name}", "text": "Nickname" }, { "id": "{contact.is_opt_out}", "text": "No Bulk Emails (User Opt Out)" }, { "id": "{contact.on_hold}", "text": "On Hold" }, { "id": "{contact.openid}", "text": "OpenID" }, { "id": "{contact.phone}", "text": "Phone" }, { "id": "{contact.phone_ext}", "text": "Phone Extension" }, { "id": "{contact.phone_type_id}", "text": "Phone Type" }, { "id": "{contact.postal_greeting}", "text": "Postal Greeting" }, { "id": "{contact.postal_greeting_id}", "text": "Postal Greeting ID" }, { "id": "{contact.preferred_communication_method}", "text": "Preferred Communication Method" }, { "id": "{contact.preferred_language}", "text": "Preferred Language" }, { "id": "{contact.preferred_mail_format}", "text": "Preferred Mail Format" }, { "id": "{contact.signature_html}", "text": "Signature Html" }, { "id": "{contact.signature_text}", "text": "Signature Text" }, { "id": "{contact.sort_name}", "text": "Sort Name" }, { "id": "{contact.url}", "text": "Website" }, { "id": "{contact.world_region}", "text": "World Region" }] }, { "text": "Domain", "children": [{ "id": "{domain.address}", "text": "Domain (organization) address" }, { "id": "{domain.email}", "text": "Domain (organization) email" }, { "id": "{domain.phone}", "text": "Domain (organization) phone" }, { "id": "{domain.name}", "text": "Domain name" }] }, { "text": "Mailing", "children": [{ "id": "{mailing.group}", "text": "Mailing group" }, { "id": "{mailing.key}", "text": "Mailing key" }, { "id": "{mailing.name}", "text": "Mailing name" }, { "id": "{mailing.viewUrl}", "text": "Mailing permalink" }] }], "contactid": "2", "requiredTokens": {
            "domain.address": "Domain address - displays your organization's postal address.", "action.optOutUrl or action.unsubscribeUrl":
                { "action.optOut": "'Opt out via email' - displays an email address for recipients to opt out of receiving emails from your organization.", "action.optOutUrl": "'Opt out via web page' - creates a link for recipients to click if they want to opt out of receiving emails from your organization. Alternatively, you can include the 'Opt out via email' token.", "action.unsubscribe": "'Unsubscribe via email' - displays an email address for recipients to unsubscribe from the specific mailing list used to send this message.", "action.unsubscribeUrl": "'Unsubscribe via web page' - creates a link for recipients to unsubscribe from the specific mailing list used to send this message. Alternatively, you can include the 'Unsubscribe via email' token or one of the Opt-out tokens." }
        }, "enableReplyTo": 0, "disableMandatoryTokensCheck": 0, "fromAddress": [{ "id": "611", "option_group_id": "31", "label": "\"AGLOA\" <cio@agloa.org>", "value": "1", "name": "\"FIXME\" <info@EXAMPLE.ORG>", "filter": "0", "is_default": "1", "weight": "1", "description": "<p>Default domain email address and from name.<\/p>", "is_optgroup": "0", "is_reserved": "0", "is_active": "1", "domain_id": "1" }], "defaultTestEmail": "cio@agloa.org", "visibility": [{ "key": "User and User Admin Only", "value": "User and User Admin Only" }, { "key": "Public Pages", "value": "Public Pages" }], "workflowEnabled": false, "reportIds": { "detail": "36", "opened": "34", "bounce": "32", "clicks": "35" }, "enabledLanguages": [], "isMultiLingual": false
    }, "permissions": { "view all contacts": true, "edit all contacts": true, "access CiviMail": true, "create mailings": true, "schedule mailings": true, "approve mailings": true, "delete in CiviMail": true, "edit message templates": true }, "crmAttachment": { "token": "9cNr_e62e18583ff942a48f49d3151f5abc0a;;;1593903155" }, "resourceUrls": { "civicrm": "https:\/\/www.dev.agloa.org\/wp-content\/plugins\/civicrm\/civicrm", "org.agloa.tournament": "https:\/\/www.dev.agloa.org\/wp-content\/uploads\/civicrm\/ext\/org.agloa.tournament", "sequentialcreditnotes": "https:\/\/www.dev.agloa.org\/wp-content\/plugins\/civicrm\/civicrm\/ext\/sequentialcreditnotes" }, "angular": { "modules": ["angularFileUpload", "api4", "crmApp", "crmAttachment", "crmAutosave", "crmCxn", "crmD3", "crmMailing", "crmMailingAB", "crmResource", "crmRouteBinder", "crmUi", "crmUtil", "dialogService", "ngRoute", "ngSanitize", "statuspage", "tournament", "ui.sortable", "ui.utils", "unsavedChanges"], "requires": { "crmAttachment": ["angularFileUpload", "crmResource"], "crmAutosave": ["crmUtil"], "crmCxn": ["crmUtil", "ngRoute", "ngSanitize", "ui.utils", "crmUi", "dialogService", "crmResource"], "crmMailing": ["crmUtil", "crmAttachment", "crmAutosave", "ngRoute", "ui.utils", "crmUi", "dialogService", "crmResource"], "crmMailingAB": ["ngRoute", "ui.utils", "crmUi", "crmAttachment", "crmMailing", "crmD3", "crmResource"], "crmRouteBinder": ["ngRoute"], "crmUi": ["crmResource", "ui.utils"], "statuspage": ["crmUi", "crmUtil", "ngRoute", "crmResource"] }, "cacheCode": "CBrPu", "bundleUrl": "https:\/\/www.dev.agloa.org\/wp-content\/uploads\/civicrm\/persist\/contribute\/dyn\/angular-modules.7259ce8b650020d1fd23eefff1a26f82.json" }
};

CRM.alert = (message) => {
    alert(message);
}

function crmApi(entityType, action, params) {
    return new Promise(function (resolve) {
        switch (entityType) {
            case "Contact":
                switch (action) {
                    default:
                        switch (params.contact_type) {
                            case "Organization":
                                resolve({
                                    organization_name: "AGLOA.org",
                                    modified_date: "2020-09-21 17:52:19",
                                    id: 1
                                });
                            default:
                                switch (params.id) {
                                    case "1":
                                        resolve({
                                            organization_name: "AGLOA.org",
                                            modified_date: "2020-09-21 17:52:19",
                                            id: 1,
                                            "contact_id": "1",
                                            "contact_type": "Organization",
                                            "contact_sub_type": "",
                                            "sort_name": "AGLOA.org",
                                            "display_name": "AGLOA.org",
                                            "do_not_email": "0",
                                            "do_not_phone": "0",
                                            "do_not_mail": "0",
                                            "do_not_sms": "0",
                                            "do_not_trade": "0",
                                            "is_opt_out": "0",
                                            "legal_identifier": "",
                                            "external_identifier": "",
                                            "nick_name": "",
                                            "legal_name": "agloa.org",
                                            "image_URL": "",
                                            "preferred_communication_method": "",
                                            "preferred_language": "en_US",
                                            "preferred_mail_format": "Both",
                                            "first_name": "",
                                            "middle_name": "",
                                            "last_name": "",
                                            "prefix_id": "",
                                            "suffix_id": "",
                                            "formal_title": "",
                                            "communication_style_id": "1",
                                            "job_title": "",
                                            "gender_id": "",
                                            "birth_date": "",
                                            "is_deceased": "0",
                                            "deceased_date": "",
                                            "household_name": "",
                                            "organization_name": "AGLOA.org",
                                            "sic_code": "",
                                            "contact_is_deleted": "0",
                                            "current_employer": "",
                                            "address_id": "11",
                                            "street_address": "PO Box 3142",
                                            "supplemental_address_1": "",
                                            "supplemental_address_2": "",
                                            "supplemental_address_3": "",
                                            "city": "Tequesta",
                                            "postal_code_suffix": "",
                                            "postal_code": "33469",
                                            "geo_code_1": "",
                                            "geo_code_2": "",
                                            "state_province_id": "",
                                            "country_id": "",
                                            "phone_id": "2",
                                            "phone_type_id": "",
                                            "phone": "(313) 595-7560",
                                            "email_id": 1,
                                            "email": "cio@agloa.org",
                                            "on_hold": "0",
                                            "im_id": "",
                                            "provider_id": "",
                                            "im": "",
                                            "worldregion_id": "",
                                            "world_region": "",
                                            "languages": "English (United States)",
                                            "individual_prefix": "",
                                            "individual_suffix": "",
                                            "communication_style": "Formal",
                                            "gender": "",
                                            "state_province_name": "",
                                            "state_province": "",
                                            "country": "",
                                            "id": 1
                                        })
                                    default:
                                        resolve(
                                            [{
                                                "id": 2,
                                                "display_name": "Mr. Michael Steigerwald",
                                                "first_name": "Michael",
                                                "last_name": "Steigerwald",
                                                "middle_name": "F",
                                                "prefix_id": 3,
                                                "suffix_id": null,
                                                "gender_id": 2,
                                                "birth_date": "1961-02-04",
                                                "modified_date": "2021-05-16 11:56:19",
                                                "address.street_address": "1870 Shady Beach Ave",
                                                "address.supplemental_address_1": null,
                                                "address.supplemental_address_2": null,
                                                "address.supplemental_address_3": null,
                                                "address.city": "Roseville",
                                                "address.state_province_id": 1022,
                                                "address.country_id": 1228,
                                                "address.postal_code": "55113",
                                                "address.postal_code_suffix": "6900"
                                            }])
                                }
                        }
                }
            case "Address":
                switch (action) {
                    default:
                        switch (params.contact_id) {
                            case "1":
                                resolve({
                                    values: [{
                                        id: "3",
                                        contact_id: "1",
                                        location_type_id: "3",
                                        is_primary: "1",
                                        is_billing: "0",
                                        street_address: "P. O. Box 3142",
                                        city: "Tequesta",
                                        state_province_id: "1008",
                                        postal_code: "33469",
                                        country_id: "1228"
                                    }]
                                })
                            case "2":
                                resolve({
                                    values: [{
                                        id: "1",
                                        contact_id: "2",
                                        location_type_id: "3",
                                        is_primary: "1",
                                        is_billing: "0",
                                        street_address: "1870 Shady Beach Ave.",
                                        city: "Minneapolis",
                                        state_province_id: "1022",
                                        postal_code_suffix: "6900",
                                        postal_code: "55113",
                                        country_id: "1228"
                                    }]
                                })
                        }
                }
            case "Phone":
                switch (action) {
                    default:
                        switch (params.contact_id) {
                            case "2":
                                resolve({
                                    values: [
                                        {
                                            id: 1,
                                            contact_id: 2,
                                            location_type_id: 3,
                                            is_primary: 1,
                                            is_billing: 0,
                                            phone: "612.875.1888",
                                            phone_numeric: "6128751888",
                                            phone_type_id: 2
                                        }
                                    ]
                                })
                            case "1":
                                resolve({
                                    values: [
                                        {
                                            id: 3,
                                            contact_id: 1,
                                            location_type_id: 3,
                                            is_primary: 1,
                                            is_billing: 0,
                                            phone: "(313) 595-7560",
                                            phone_numeric: "3135957560",
                                            phone_type_id: 2
                                        }
                                    ]
                                })
                        }
                }
            case "Email":
                switch (action) {
                    default: switch (params.contact_id) {
                        case "1":
                            resolve({
                                values: [{
                                    id: 1,
                                    contact_id: 1,
                                    location_type_id: 3,
                                    email: "info@agloa.org",
                                    is_primary: 1,
                                    is_billing: 0,
                                    on_hold: 0,
                                    is_bulkmail: 0
                                }]
                            })
                        case "2":
                            resolve({
                                values: [{
                                    id: 1,
                                    contact_id: 2,
                                    location_type_id: 3,
                                    email: "cio@agloa.org",
                                    is_primary: 1,
                                    is_billing: 0,
                                    on_hold: 0,
                                    is_bulkmail: 0
                                }]
                            })
                    }
                }
            case "OptionValue":
                switch (action) {
                    default:
                        switch (params.where[0][2]) {
                            case "gender":
                                resolve(
                                    [
                                        {
                                            "id": 60,
                                            "value": "1",
                                            "label": "Female"
                                        },
                                        {
                                            "id": 61,
                                            "value": "2",
                                            "label": "Male"
                                        },
                                        {
                                            "id": 62,
                                            "value": "3",
                                            "label": "Other"
                                        }
                                    ]);
                                break;
                            case "individual_prefix":
                                resolve([
                                    {
                                        value: "1",
                                        label: "Mrs."
                                    },
                                    {
                                        value: "2",
                                        label: "Ms."
                                    },
                                    {
                                        value: "3",
                                        label: "Mr."
                                    },
                                    {
                                        value: "4",
                                        label: "Dr."
                                    }
                                ]);
                                break;
                            case "individual_suffix":
                                resolve([
                                    {
                                        label: "Jr.",
                                        value: "1"
                                    },
                                    {
                                        label: "Sr.",
                                        value: "2"
                                    },
                                    {
                                        label: "II",
                                        value: "3"
                                    },
                                    {
                                        label: "III",
                                        value: "4"
                                    },
                                    {
                                        label: "IV",
                                        value: "5"
                                    },
                                    {
                                        label: "V",
                                        value: "6"
                                    },
                                    {
                                        label: "VI",
                                        value: "7"
                                    },
                                    {
                                        label: "VII",
                                        value: "8"
                                    }
                                ]);
                                break;
                        }
                };
            case "RelationshipType": {
                switch (action) {
                    default:
                        resolve({
                            "values": [
                                {
                                    "id": "12",
                                    "name_a_b": "Billing contact for",
                                    "label_a_b": "Billing contact for",
                                    "name_b_a": "Billing contact is",
                                    "label_b_a": "Billing contact is",
                                    "description": "Billing contact relationship",
                                    "contact_type_a": "Individual",
                                    "contact_type_b": "Organization",
                                    "is_active": "1"
                                }
                            ]
                        })
                }
            }
            case "Relationship": {
                switch (action) {
                    default:
                        resolve({
                            "values": [
                                {
                                    "id": "1",
                                    "contact_id_b.id": "1",
                                    "contact_id_b.modified_date": "2020-03-21 17:52:19",
                                    "contact_id_b.organization_name": "agloa.org"
                                }
                            ]
                        })
                }
            }
            case "Group": {
                return {
                    "values": [
                        {
                            "id": "1",
                            "name": "Administrators",
                            "title": "Administrators",
                            "description": "Contacts in this group are assigned Administrator role permissions.",
                            "is_active": "1",
                            "visibility": "User and User Admin Only",
                            "group_type": [
                                "1"
                            ],
                            "is_hidden": "0",
                            "is_reserved": "0"
                        }
                    ]
                }
            }
            case "Setting":
                switch (action) {
                    default:
                        switch (params.return[0]) {
                            case "countryLimit":
                                resolve({ values: [{ countryLimit: ["1228", "1101", "1208"] }] })
                        }
                }
            case "Country":
                switch (action) {
                    default:
                        resolve({
                            values: [
                                {
                                    id: "1101",
                                    name: "India",
                                    iso_code: "IN",
                                    region_id: "4",
                                    is_province_abbreviated: "0"
                                },
                                {
                                    id: "1208",
                                    name: "Taiwan",
                                    iso_code: "TW",
                                    region_id: "4",
                                    is_province_abbreviated: "0"
                                },
                                {
                                    id: "1228",
                                    name: "United States",
                                    iso_code: "US",
                                    region_id: "2",
                                    is_province_abbreviated: "1"
                                }
                            ]
                        })
                }
            case "StateProvince":
                switch (action) {
                    default:
                        resolve({
                            values: [
                                {
                                    id: "1000",
                                    name: "Alabama",
                                    abbreviation: "AL",
                                    country_id: "1228"
                                },
                                {
                                    id: "1001",
                                    name: "Alaska",
                                    abbreviation: "AK",
                                    country_id: "1228"
                                },
                                {
                                    id: "1002",
                                    name: "Arizona",
                                    abbreviation: "AZ",
                                    country_id: "1228"
                                },
                                {
                                    id: "1003",
                                    name: "Arkansas",
                                    abbreviation: "AR",
                                    country_id: "1228"
                                },
                                {
                                    id: "1004",
                                    name: "California",
                                    abbreviation: "CA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1005",
                                    name: "Colorado",
                                    abbreviation: "CO",
                                    country_id: "1228"
                                },
                                {
                                    id: "1006",
                                    name: "Connecticut",
                                    abbreviation: "CT",
                                    country_id: "1228"
                                },
                                {
                                    id: "1007",
                                    name: "Delaware",
                                    abbreviation: "DE",
                                    country_id: "1228"
                                },
                                {
                                    id: "1008",
                                    name: "Florida",
                                    abbreviation: "FL",
                                    country_id: "1228"
                                },
                                {
                                    id: "1009",
                                    name: "Georgia",
                                    abbreviation: "GA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1010",
                                    name: "Hawaii",
                                    abbreviation: "HI",
                                    country_id: "1228"
                                },
                                {
                                    id: "1011",
                                    name: "Idaho",
                                    abbreviation: "ID",
                                    country_id: "1228"
                                },
                                {
                                    id: "1012",
                                    name: "Illinois",
                                    abbreviation: "IL",
                                    country_id: "1228"
                                },
                                {
                                    id: "1013",
                                    name: "Indiana",
                                    abbreviation: "IN",
                                    country_id: "1228"
                                },
                                {
                                    id: "1014",
                                    name: "Iowa",
                                    abbreviation: "IA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1015",
                                    name: "Kansas",
                                    abbreviation: "KS",
                                    country_id: "1228"
                                },
                                {
                                    id: "1016",
                                    name: "Kentucky",
                                    abbreviation: "KY",
                                    country_id: "1228"
                                },
                                {
                                    id: "1017",
                                    name: "Louisiana",
                                    abbreviation: "LA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1018",
                                    name: "Maine",
                                    abbreviation: "ME",
                                    country_id: "1228"
                                },
                                {
                                    id: "1019",
                                    name: "Maryland",
                                    abbreviation: "MD",
                                    country_id: "1228"
                                },
                                {
                                    id: "1020",
                                    name: "Massachusetts",
                                    abbreviation: "MA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1021",
                                    name: "Michigan",
                                    abbreviation: "MI",
                                    country_id: "1228"
                                },
                                {
                                    id: "1022",
                                    name: "Minnesota",
                                    abbreviation: "MN",
                                    country_id: "1228"
                                },
                                {
                                    id: "1023",
                                    name: "Mississippi",
                                    abbreviation: "MS",
                                    country_id: "1228"
                                },
                                {
                                    id: "1024",
                                    name: "Missouri",
                                    abbreviation: "MO",
                                    country_id: "1228"
                                },
                                {
                                    id: "1025",
                                    name: "Montana",
                                    abbreviation: "MT",
                                    country_id: "1228"
                                },
                                {
                                    id: "1026",
                                    name: "Nebraska",
                                    abbreviation: "NE",
                                    country_id: "1228"
                                },
                                {
                                    id: "1027",
                                    name: "Nevada",
                                    abbreviation: "NV",
                                    country_id: "1228"
                                },
                                {
                                    id: "1028",
                                    name: "New Hampshire",
                                    abbreviation: "NH",
                                    country_id: "1228"
                                },
                                {
                                    id: "1029",
                                    name: "New Jersey",
                                    abbreviation: "NJ",
                                    country_id: "1228"
                                },
                                {
                                    id: "1030",
                                    name: "New Mexico",
                                    abbreviation: "NM",
                                    country_id: "1228"
                                },
                                {
                                    id: "1031",
                                    name: "New York",
                                    abbreviation: "NY",
                                    country_id: "1228"
                                },
                                {
                                    id: "1032",
                                    name: "North Carolina",
                                    abbreviation: "NC",
                                    country_id: "1228"
                                },
                                {
                                    id: "1033",
                                    name: "North Dakota",
                                    abbreviation: "ND",
                                    country_id: "1228"
                                },
                                {
                                    id: "1034",
                                    name: "Ohio",
                                    abbreviation: "OH",
                                    country_id: "1228"
                                },
                                {
                                    id: "1035",
                                    name: "Oklahoma",
                                    abbreviation: "OK",
                                    country_id: "1228"
                                },
                                {
                                    id: "1036",
                                    name: "Oregon",
                                    abbreviation: "OR",
                                    country_id: "1228"
                                },
                                {
                                    id: "1037",
                                    name: "Pennsylvania",
                                    abbreviation: "PA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1038",
                                    name: "Rhode Island",
                                    abbreviation: "RI",
                                    country_id: "1228"
                                },
                                {
                                    id: "1039",
                                    name: "South Carolina",
                                    abbreviation: "SC",
                                    country_id: "1228"
                                },
                                {
                                    id: "1040",
                                    name: "South Dakota",
                                    abbreviation: "SD",
                                    country_id: "1228"
                                },
                                {
                                    id: "1041",
                                    name: "Tennessee",
                                    abbreviation: "TN",
                                    country_id: "1228"
                                },
                                {
                                    id: "1042",
                                    name: "Texas",
                                    abbreviation: "TX",
                                    country_id: "1228"
                                },
                                {
                                    id: "1043",
                                    name: "Utah",
                                    abbreviation: "UT",
                                    country_id: "1228"
                                },
                                {
                                    id: "1044",
                                    name: "Vermont",
                                    abbreviation: "VT",
                                    country_id: "1228"
                                },
                                {
                                    id: "1045",
                                    name: "Virginia",
                                    abbreviation: "VA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1046",
                                    name: "Washington",
                                    abbreviation: "WA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1047",
                                    name: "West Virginia",
                                    abbreviation: "WV",
                                    country_id: "1228"
                                },
                                {
                                    id: "1048",
                                    name: "Wisconsin",
                                    abbreviation: "WI",
                                    country_id: "1228"
                                },
                                {
                                    id: "1049",
                                    name: "Wyoming",
                                    abbreviation: "WY",
                                    country_id: "1228"
                                },
                                {
                                    id: "1050",
                                    name: "District of Columbia",
                                    abbreviation: "DC",
                                    country_id: "1228"
                                },
                                {
                                    id: "1052",
                                    name: "American Samoa",
                                    abbreviation: "AS",
                                    country_id: "1228"
                                },
                                {
                                    id: "1053",
                                    name: "Guam",
                                    abbreviation: "GU",
                                    country_id: "1228"
                                },
                                {
                                    id: "1055",
                                    name: "Northern Mariana Islands",
                                    abbreviation: "MP",
                                    country_id: "1228"
                                },
                                {
                                    id: "1056",
                                    name: "Puerto Rico",
                                    abbreviation: "PR",
                                    country_id: "1228"
                                },
                                {
                                    id: "1057",
                                    name: "Virgin Islands",
                                    abbreviation: "VI",
                                    country_id: "1228"
                                },
                                {
                                    id: "1058",
                                    name: "United States Minor Outlying Islands",
                                    abbreviation: "UM",
                                    country_id: "1228"
                                },
                                {
                                    id: "1059",
                                    name: "Armed Forces Europe",
                                    abbreviation: "AE",
                                    country_id: "1228"
                                },
                                {
                                    id: "1060",
                                    name: "Armed Forces Americas",
                                    abbreviation: "AA",
                                    country_id: "1228"
                                },
                                {
                                    id: "1061",
                                    name: "Armed Forces Pacific",
                                    abbreviation: "AP",
                                    country_id: "1228"
                                }
                            ]
                        })
                }
        }
    });
}

angular.module('tournament').factory('crmApi', function ($q) {
    return function (entity, action, params) {
        if (typeof entity === 'string') {
            entityType = entity;
        } else {
            entityType = JSON.stringify(entity);
        }

        var deferred = $q.defer();
        var p = crmApi(entityType, action, params);

        p.then(
            function (result) {
                if (result.is_error) {
                    deferred.reject(result);
                } else {
                    deferred.resolve(result);
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };
});

angular.module('tournament').factory('crmApi4', function ($q) {
    return function (entity, action, params) {
        if (typeof entity === 'string') {
            entityType = entity;
        } else {
            entityType = JSON.stringify(entity);
        }

        var deferred = $q.defer();
        var p = crmApi(entityType, action, params);

        p.then(
            function (result) {
                if (result.is_error) {
                    deferred.reject(result);
                } else {
                    deferred.resolve(result);
                }
            },
            function (error) {
                deferred.reject(error);
            }
        );

        return deferred.promise;
    };
});