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
                        switch (params.where[0][2]) {
                            case "1":
                                resolve(
                                    [{
                                        "id": 1,
                                        "contact_sub_type": null,
                                        "organization_name": "agloa.org",
                                        "modified_date": "2021-04-25 17:31:59",
                                        "email.email": "cio@agloa.org",
                                        "email.id": 1,
                                        "phone.phone": "(313) 595-7560",
                                        "phone.id": 2,
                                        "address.id": 2,
                                        "address.street_address": "PO Box 3142",
                                        "address.supplemental_address_1": null,
                                        "address.supplemental_address_2": null,
                                        "address.supplemental_address_3": null,
                                        "address.city": "Tequesta",
                                        "address.state_province_id": 1008,
                                        "address.country_id": 1228,
                                        "address.postal_code": "33469",
                                        "address.postal_code_suffix": null
                                    }]);
                                break;
                            case "13":
                                resolve(
                                    [{
                                        "id": 13,
                                        "contact_type": "Individual",
                                        "contact_sub_type": null,
                                        "do_not_email": false,
                                        "do_not_phone": false,
                                        "do_not_mail": false,
                                        "do_not_sms": false,
                                        "do_not_trade": false,
                                        "is_opt_out": false,
                                        "legal_identifier": null,
                                        "external_identifier": null,
                                        "sort_name": "Hampton, John",
                                        "display_name": "Mr. John  Hampton",
                                        "nick_name": null,
                                        "image_URL": null,
                                        "preferred_communication_method": null,
                                        "preferred_language": "en_US",
                                        "preferred_mail_format": "Both",
                                        "hash": "1da8fce6492bd3dac048a76626d58c02",
                                        "api_key": null,
                                        "source": "Account Registration",
                                        "first_name": "John ",
                                        "middle_name": "F",
                                        "last_name": "Hampton",
                                        "prefix_id": 3,
                                        "suffix_id": null,
                                        "formal_title": null,
                                        "communication_style_id": 1,
                                        "email_greeting_id": 1,
                                        "email_greeting_custom": null,
                                        "email_greeting_display": "Dear John",
                                        "postal_greeting_id": 1,
                                        "postal_greeting_custom": null,
                                        "postal_greeting_display": "Dear John",
                                        "addressee_id": 1,
                                        "addressee_custom": null,
                                        "addressee_display": "Mr. John F Hampton",
                                        "job_title": null,
                                        "gender_id": 2,
                                        "birth_date": "1971-12-04",
                                        "is_deceased": false,
                                        "deceased_date": null,
                                        "user_unique_id": null,
                                        "employer_id": null,
                                        "is_deleted": false,
                                        "created_date": "2021-05-08 14:17:14",
                                        "modified_date": "2021-05-16 11:56:19",
                                        "address.id": 12,
                                        "address.contact_id": 13,
                                        "address.location_type_id": 1,
                                        "address.is_primary": true,
                                        "address.is_billing": false,
                                        "address.street_address": "2141 Lewis Canyon Dr",
                                        "address.street_number": null,
                                        "address.street_number_suffix": null,
                                        "address.street_number_predirectional": null,
                                        "address.street_name": null,
                                        "address.street_type": null,
                                        "address.street_number_postdirectional": null,
                                        "address.street_unit": null,
                                        "address.supplemental_address_1": null,
                                        "address.supplemental_address_2": null,
                                        "address.supplemental_address_3": null,
                                        "address.city": "Prosper",
                                        "address.county_id": null,
                                        "address.state_province_id": 1042,
                                        "address.postal_code_suffix": null,
                                        "address.postal_code": "75078",
                                        "address.usps_adc": null,
                                        "address.country_id": 1228,
                                        "address.geo_code_1": null,
                                        "address.geo_code_2": null,
                                        "address.manual_geo_code": false,
                                        "address.timezone": null,
                                        "address.name": null,
                                        "address.master_id": null,
                                        "email.id": 3,
                                        "email.contact_id": 13,
                                        "email.location_type_id": 1,
                                        "email.email": "truth1837@icloud.com",
                                        "email.is_primary": true,
                                        "email.is_billing": false,
                                        "email.on_hold": 0,
                                        "email.is_bulkmail": false,
                                        "email.hold_date": null,
                                        "email.reset_date": null,
                                        "email.signature_text": null,
                                        "email.signature_html": null,
                                        "phone.id": 3,
                                        "phone.contact_id": 13,
                                        "phone.location_type_id": 1,
                                        "phone.is_primary": true,
                                        "phone.is_billing": false,
                                        "phone.mobile_provider_id": null,
                                        "phone.phone": "9403673550",
                                        "phone.phone_ext": null,
                                        "phone.phone_numeric": "9403673550",
                                        "phone.phone_type_id": null
                                    }]);

                                break; case "15":
                                resolve(
                                    [{
                                        "id": 15,
                                        "contact_type": "Organization",
                                        "contact_sub_type": null,
                                        "do_not_email": false,
                                        "do_not_phone": false,
                                        "do_not_mail": false,
                                        "do_not_sms": false,
                                        "do_not_trade": false,
                                        "is_opt_out": false,
                                        "legal_identifier": null,
                                        "external_identifier": null,
                                        "sort_name": "North Texas League of Academic Games",
                                        "display_name": "North Texas League of Academic Games",
                                        "nick_name": null,
                                        "legal_name": null,
                                        "image_URL": null,
                                        "preferred_communication_method": null,
                                        "preferred_language": "en_US",
                                        "preferred_mail_format": "Both",
                                        "hash": "16e44fdb85cf5247c8ac6ccdeda248fe",
                                        "api_key": null,
                                        "source": "Account Registration",
                                        "communication_style_id": 1,
                                        "email_greeting_id": null,
                                        "email_greeting_custom": null,
                                        "email_greeting_display": null,
                                        "postal_greeting_id": null,
                                        "postal_greeting_custom": null,
                                        "postal_greeting_display": null,
                                        "addressee_id": 3,
                                        "addressee_custom": null,
                                        "addressee_display": "North Texas League of Academic Games",
                                        "organization_name": "North Texas League of Academic Games",
                                        "sic_code": null,
                                        "user_unique_id": null,
                                        "is_deleted": false,
                                        "created_date": "2021-05-08 15:03:35",
                                        "modified_date": "2021-05-08 15:03:35",
                                        "address.id": 14,
                                        "address.contact_id": 15,
                                        "address.location_type_id": 1,
                                        "address.is_primary": true,
                                        "address.is_billing": false,
                                        "address.street_address": "2141 Lewis Canyon Dr",
                                        "address.street_number": null,
                                        "address.street_number_suffix": null,
                                        "address.street_number_predirectional": null,
                                        "address.street_name": null,
                                        "address.street_type": null,
                                        "address.street_number_postdirectional": null,
                                        "address.street_unit": null,
                                        "address.supplemental_address_1": null,
                                        "address.supplemental_address_2": null,
                                        "address.supplemental_address_3": null,
                                        "address.city": "Prosper",
                                        "address.county_id": null,
                                        "address.state_province_id": 1042,
                                        "address.postal_code_suffix": null,
                                        "address.postal_code": "75078",
                                        "address.usps_adc": null,
                                        "address.country_id": 1228,
                                        "address.geo_code_1": null,
                                        "address.geo_code_2": null,
                                        "address.manual_geo_code": false,
                                        "address.timezone": null,
                                        "address.name": null,
                                        "address.master_id": null,
                                        "email.id": 5,
                                        "email.contact_id": 15,
                                        "email.location_type_id": 1,
                                        "email.email": "truth1837@icloud.com",
                                        "email.is_primary": true,
                                        "email.is_billing": false,
                                        "email.on_hold": 0,
                                        "email.is_bulkmail": false,
                                        "email.hold_date": null,
                                        "email.reset_date": null,
                                        "email.signature_text": null,
                                        "email.signature_html": null,
                                        "phone.id": 5,
                                        "phone.contact_id": 15,
                                        "phone.location_type_id": 1,
                                        "phone.is_primary": true,
                                        "phone.is_billing": false,
                                        "phone.mobile_provider_id": null,
                                        "phone.phone": "9403673550",
                                        "phone.phone_ext": null,
                                        "phone.phone_numeric": "9403673550",
                                        "phone.phone_type_id": null
                                    }]);
                                break;
                            case "billingOrganization":
                                resolve([{
                                    "id": 15,
                                    "contact_type": "Organization",
                                    "contact_sub_type": null,
                                    "do_not_email": false,
                                    "do_not_phone": false,
                                    "do_not_mail": false,
                                    "do_not_sms": false,
                                    "do_not_trade": false,
                                    "is_opt_out": false,
                                    "legal_identifier": null,
                                    "external_identifier": null,
                                    "sort_name": "North Texas League of Academic Games",
                                    "display_name": "North Texas League of Academic Games",
                                    "nick_name": null,
                                    "legal_name": null,
                                    "image_URL": null,
                                    "preferred_communication_method": null,
                                    "preferred_language": "en_US",
                                    "preferred_mail_format": "Both",
                                    "hash": "16e44fdb85cf5247c8ac6ccdeda248fe",
                                    "api_key": null,
                                    "source": "Account Registration",
                                    "communication_style_id": 1,
                                    "email_greeting_id": null,
                                    "email_greeting_custom": null,
                                    "email_greeting_display": null,
                                    "postal_greeting_id": null,
                                    "postal_greeting_custom": null,
                                    "postal_greeting_display": null,
                                    "addressee_id": 3,
                                    "addressee_custom": null,
                                    "addressee_display": "North Texas League of Academic Games",
                                    "organization_name": "North Texas League of Academic Games",
                                    "sic_code": null,
                                    "user_unique_id": null,
                                    "is_deleted": false,
                                    "created_date": "2021-05-08 15:03:35",
                                    "modified_date": "2021-05-08 15:03:35",
                                    "address.id": 14,
                                    "address.contact_id": 15,
                                    "address.location_type_id": 1,
                                    "address.is_primary": true,
                                    "address.is_billing": false,
                                    "address.street_address": "2141 Lewis Canyon Dr",
                                    "address.street_number": null,
                                    "address.street_number_suffix": null,
                                    "address.street_number_predirectional": null,
                                    "address.street_name": null,
                                    "address.street_type": null,
                                    "address.street_number_postdirectional": null,
                                    "address.street_unit": null,
                                    "address.supplemental_address_1": null,
                                    "address.supplemental_address_2": null,
                                    "address.supplemental_address_3": null,
                                    "address.city": "Prosper",
                                    "address.county_id": null,
                                    "address.state_province_id": 1042,
                                    "address.postal_code_suffix": null,
                                    "address.postal_code": "75078",
                                    "address.usps_adc": null,
                                    "address.country_id": 1228,
                                    "address.geo_code_1": null,
                                    "address.geo_code_2": null,
                                    "address.manual_geo_code": false,
                                    "address.timezone": null,
                                    "address.name": null,
                                    "address.master_id": null,
                                    "email.id": 5,
                                    "email.contact_id": 15,
                                    "email.location_type_id": 1,
                                    "email.email": "truth1837@icloud.com",
                                    "email.is_primary": true,
                                    "email.is_billing": false,
                                    "email.on_hold": 0,
                                    "email.is_bulkmail": false,
                                    "email.hold_date": null,
                                    "email.reset_date": null,
                                    "email.signature_text": null,
                                    "email.signature_html": null,
                                    "phone.id": 5,
                                    "phone.contact_id": 15,
                                    "phone.location_type_id": 1,
                                    "phone.is_primary": true,
                                    "phone.is_billing": false,
                                    "phone.mobile_provider_id": null,
                                    "phone.phone": "9403673550",
                                    "phone.phone_ext": null,
                                    "phone.phone_numeric": "9403673550",
                                    "phone.phone_type_id": null
                                }]);
                                break;
                            default:
                                resolve([
                                    {
                                        "id": 2,
                                        "contact_type": "Individual",
                                        "contact_sub_type": null,
                                        "display_name": "Mr. Michael Steigerwald",
                                        "sort_name": "Steigerwald, Michael",
                                        "first_name": "Michael",
                                        "middle_name": "F.",
                                        "last_name": "Steigerwald",
                                        "suffix_id": null,
                                        "prefix_id": 3,
                                        "gender_id": 2,
                                        "birth_date": "1961-02-05",
                                        "address.is_primary": true,
                                        "address.street_address": "1870 Shady Beach Ave.",
                                        "address.is_billing": false,
                                        "address.city": "Roseville",
                                        "address.state_province_id": 1022,
                                        "address.country_id": 1228,
                                        "address.postal_code": "55113",
                                        "address.postal_code_suffix": "6900",
                                        "phone.is_primary": true,
                                        "phone.phone": "(612) 875-1888",
                                        "phone.is_billing": false,
                                        "email.id": 2,
                                        "email.contact_id": 2,
                                        "email.location_type_id": 3,
                                        "email.email": "steiger@umich.edu",
                                        "email.is_primary": true,
                                        "email.is_billing": false,
                                        "email.on_hold": 0,
                                        "email.is_bulkmail": false,
                                        "email.hold_date": null,
                                        "email.reset_date": null,
                                        "email.signature_text": null,
                                        "email.signature_html": null,
                                        "modified_date": "2021-12-31 15:47:05"
                                    }
                                ])
                        }
                };
                break;
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
                        resolve(
                            [
                                {
                                    id: "13"
                                }
                            ]
                        )
                }
            }
            case "ContactType": {
                switch (action) {
                    default:
                        resolve(
                            [
                                {
                                    id: "6"
                                }
                            ]
                        )
                }
            }
            case "Relationship": {
                switch (action) {
                    default:
                        resolve([
                            {
                                "id": 2,
                                "contact_id_b": 1,
                                "relationship_type_id": 13,
                                "contact_b.display_name": "agloa.org",
                                "start_date": "2020-09-01",
                                "end_date": null,
                                "description": "",
                                "relationship_type.name_a_b": "Billing contact for",
                                "contact_b.modified_date": "2021-04-25 17:31:59"
                            },
                            {
                                "id": 4,
                                "contact_id_b": 15,
                                "relationship_type_id": 13,
                                "contact_b.display_name": "North Texas League of Academic Games",
                                "start_date": null,
                                "end_date": null,
                                "description": "",
                                "relationship_type.name_a_b": "Billing contact for",
                                "contact_b.modified_date": "2021-05-08 15:03:35"
                            }
                        ])
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
                resolve([
                    {
                        "name": "countryLimit",
                        "value": [
                            "1228",
                            "1101",
                            "1208"
                        ],
                        "domain_id": 1
                    }
                ])
            case "Country":
                resolve([
                    {
                        "id": 1101,
                        "name": "India"
                    },
                    {
                        "id": 1208,
                        "name": "Taiwan"
                    },
                    {
                        "id": 1228,
                        "name": "United States"
                    }
                ])
            case "StateProvince":
                resolve([
                    {
                        "id": 1200,
                        "name": "Maharashtra",
                        "country_id": 1101
                    },
                    {
                        "id": 1201,
                        "name": "Karnataka",
                        "country_id": 1101
                    },
                    {
                        "id": 1202,
                        "name": "Andhra Pradesh",
                        "country_id": 1101
                    },
                    {
                        "id": 1203,
                        "name": "Arunachal Pradesh",
                        "country_id": 1101
                    },
                    {
                        "id": 1204,
                        "name": "Assam",
                        "country_id": 1101
                    },
                    {
                        "id": 1205,
                        "name": "Bihar",
                        "country_id": 1101
                    },
                    {
                        "id": 1206,
                        "name": "Chhattisgarh",
                        "country_id": 1101
                    },
                    {
                        "id": 1207,
                        "name": "Goa",
                        "country_id": 1101
                    },
                    {
                        "id": 1208,
                        "name": "Gujarat",
                        "country_id": 1101
                    },
                    {
                        "id": 1209,
                        "name": "Haryana",
                        "country_id": 1101
                    },
                    {
                        "id": 1210,
                        "name": "Himachal Pradesh",
                        "country_id": 1101
                    },
                    {
                        "id": 1211,
                        "name": "Jammu and Kashmir",
                        "country_id": 1101
                    },
                    {
                        "id": 1212,
                        "name": "Jharkhand",
                        "country_id": 1101
                    },
                    {
                        "id": 1213,
                        "name": "Kerala",
                        "country_id": 1101
                    },
                    {
                        "id": 1214,
                        "name": "Madhya Pradesh",
                        "country_id": 1101
                    },
                    {
                        "id": 1215,
                        "name": "Manipur",
                        "country_id": 1101
                    },
                    {
                        "id": 1216,
                        "name": "Meghalaya",
                        "country_id": 1101
                    },
                    {
                        "id": 1217,
                        "name": "Mizoram",
                        "country_id": 1101
                    },
                    {
                        "id": 1218,
                        "name": "Nagaland",
                        "country_id": 1101
                    },
                    {
                        "id": 1219,
                        "name": "Orissa",
                        "country_id": 1101
                    },
                    {
                        "id": 1220,
                        "name": "Punjab",
                        "country_id": 1101
                    },
                    {
                        "id": 1221,
                        "name": "Rajasthan",
                        "country_id": 1101
                    },
                    {
                        "id": 1222,
                        "name": "Sikkim",
                        "country_id": 1101
                    },
                    {
                        "id": 1223,
                        "name": "Tamil Nadu",
                        "country_id": 1101
                    },
                    {
                        "id": 1224,
                        "name": "Tripura",
                        "country_id": 1101
                    },
                    {
                        "id": 1225,
                        "name": "Uttarakhand",
                        "country_id": 1101
                    },
                    {
                        "id": 1226,
                        "name": "Uttar Pradesh",
                        "country_id": 1101
                    },
                    {
                        "id": 1227,
                        "name": "West Bengal",
                        "country_id": 1101
                    },
                    {
                        "id": 1228,
                        "name": "Andaman and Nicobar Islands",
                        "country_id": 1101
                    },
                    {
                        "id": 1229,
                        "name": "Dadra and Nagar Haveli",
                        "country_id": 1101
                    },
                    {
                        "id": 1230,
                        "name": "Daman and Diu",
                        "country_id": 1101
                    },
                    {
                        "id": 1231,
                        "name": "Delhi",
                        "country_id": 1101
                    },
                    {
                        "id": 1232,
                        "name": "Lakshadweep",
                        "country_id": 1101
                    },
                    {
                        "id": 1233,
                        "name": "Pondicherry",
                        "country_id": 1101
                    },
                    {
                        "id": 10267,
                        "name": "Telangana",
                        "country_id": 1101
                    },
                    {
                        "id": 10321,
                        "name": "Chandigarh",
                        "country_id": 1101
                    },
                    {
                        "id": 4848,
                        "name": "Changhua County",
                        "country_id": 1208
                    },
                    {
                        "id": 4849,
                        "name": "Chiayi County",
                        "country_id": 1208
                    },
                    {
                        "id": 4850,
                        "name": "Hsinchu County",
                        "country_id": 1208
                    },
                    {
                        "id": 4851,
                        "name": "Hualien County",
                        "country_id": 1208
                    },
                    {
                        "id": 4852,
                        "name": "Ilan County",
                        "country_id": 1208
                    },
                    {
                        "id": 4853,
                        "name": "Kaohsiung County",
                        "country_id": 1208
                    },
                    {
                        "id": 4854,
                        "name": "Miaoli County",
                        "country_id": 1208
                    },
                    {
                        "id": 4855,
                        "name": "Nantou County",
                        "country_id": 1208
                    },
                    {
                        "id": 4856,
                        "name": "Penghu County",
                        "country_id": 1208
                    },
                    {
                        "id": 4857,
                        "name": "Pingtung County",
                        "country_id": 1208
                    },
                    {
                        "id": 4858,
                        "name": "Taichung County",
                        "country_id": 1208
                    },
                    {
                        "id": 4859,
                        "name": "Tainan County",
                        "country_id": 1208
                    },
                    {
                        "id": 4860,
                        "name": "Taipei County",
                        "country_id": 1208
                    },
                    {
                        "id": 4861,
                        "name": "Taitung County",
                        "country_id": 1208
                    },
                    {
                        "id": 4862,
                        "name": "Taoyuan County",
                        "country_id": 1208
                    },
                    {
                        "id": 4863,
                        "name": "Yunlin County",
                        "country_id": 1208
                    },
                    {
                        "id": 4864,
                        "name": "Keelung City",
                        "country_id": 1208
                    },
                    {
                        "id": 5219,
                        "name": "Taichung City",
                        "country_id": 1208
                    },
                    {
                        "id": 5220,
                        "name": "Kaohsiung City",
                        "country_id": 1208
                    },
                    {
                        "id": 5221,
                        "name": "Taipei City",
                        "country_id": 1208
                    },
                    {
                        "id": 5222,
                        "name": "Chiayi City",
                        "country_id": 1208
                    },
                    {
                        "id": 5223,
                        "name": "Hsinchu City",
                        "country_id": 1208
                    },
                    {
                        "id": 5224,
                        "name": "Tainan City",
                        "country_id": 1208
                    },
                    {
                        "id": 1000,
                        "name": "Alabama",
                        "country_id": 1228
                    },
                    {
                        "id": 1001,
                        "name": "Alaska",
                        "country_id": 1228
                    },
                    {
                        "id": 1002,
                        "name": "Arizona",
                        "country_id": 1228
                    },
                    {
                        "id": 1003,
                        "name": "Arkansas",
                        "country_id": 1228
                    },
                    {
                        "id": 1004,
                        "name": "California",
                        "country_id": 1228
                    },
                    {
                        "id": 1005,
                        "name": "Colorado",
                        "country_id": 1228
                    },
                    {
                        "id": 1006,
                        "name": "Connecticut",
                        "country_id": 1228
                    },
                    {
                        "id": 1007,
                        "name": "Delaware",
                        "country_id": 1228
                    },
                    {
                        "id": 1008,
                        "name": "Florida",
                        "country_id": 1228
                    },
                    {
                        "id": 1009,
                        "name": "Georgia",
                        "country_id": 1228
                    },
                    {
                        "id": 1010,
                        "name": "Hawaii",
                        "country_id": 1228
                    },
                    {
                        "id": 1011,
                        "name": "Idaho",
                        "country_id": 1228
                    },
                    {
                        "id": 1012,
                        "name": "Illinois",
                        "country_id": 1228
                    },
                    {
                        "id": 1013,
                        "name": "Indiana",
                        "country_id": 1228
                    },
                    {
                        "id": 1014,
                        "name": "Iowa",
                        "country_id": 1228
                    },
                    {
                        "id": 1015,
                        "name": "Kansas",
                        "country_id": 1228
                    },
                    {
                        "id": 1016,
                        "name": "Kentucky",
                        "country_id": 1228
                    },
                    {
                        "id": 1017,
                        "name": "Louisiana",
                        "country_id": 1228
                    },
                    {
                        "id": 1018,
                        "name": "Maine",
                        "country_id": 1228
                    },
                    {
                        "id": 1019,
                        "name": "Maryland",
                        "country_id": 1228
                    },
                    {
                        "id": 1020,
                        "name": "Massachusetts",
                        "country_id": 1228
                    },
                    {
                        "id": 1021,
                        "name": "Michigan",
                        "country_id": 1228
                    },
                    {
                        "id": 1022,
                        "name": "Minnesota",
                        "country_id": 1228
                    },
                    {
                        "id": 1023,
                        "name": "Mississippi",
                        "country_id": 1228
                    },
                    {
                        "id": 1024,
                        "name": "Missouri",
                        "country_id": 1228
                    },
                    {
                        "id": 1025,
                        "name": "Montana",
                        "country_id": 1228
                    },
                    {
                        "id": 1026,
                        "name": "Nebraska",
                        "country_id": 1228
                    },
                    {
                        "id": 1027,
                        "name": "Nevada",
                        "country_id": 1228
                    },
                    {
                        "id": 1028,
                        "name": "New Hampshire",
                        "country_id": 1228
                    },
                    {
                        "id": 1029,
                        "name": "New Jersey",
                        "country_id": 1228
                    },
                    {
                        "id": 1030,
                        "name": "New Mexico",
                        "country_id": 1228
                    },
                    {
                        "id": 1031,
                        "name": "New York",
                        "country_id": 1228
                    },
                    {
                        "id": 1032,
                        "name": "North Carolina",
                        "country_id": 1228
                    },
                    {
                        "id": 1033,
                        "name": "North Dakota",
                        "country_id": 1228
                    },
                    {
                        "id": 1034,
                        "name": "Ohio",
                        "country_id": 1228
                    },
                    {
                        "id": 1035,
                        "name": "Oklahoma",
                        "country_id": 1228
                    },
                    {
                        "id": 1036,
                        "name": "Oregon",
                        "country_id": 1228
                    },
                    {
                        "id": 1037,
                        "name": "Pennsylvania",
                        "country_id": 1228
                    },
                    {
                        "id": 1038,
                        "name": "Rhode Island",
                        "country_id": 1228
                    },
                    {
                        "id": 1039,
                        "name": "South Carolina",
                        "country_id": 1228
                    },
                    {
                        "id": 1040,
                        "name": "South Dakota",
                        "country_id": 1228
                    },
                    {
                        "id": 1041,
                        "name": "Tennessee",
                        "country_id": 1228
                    },
                    {
                        "id": 1042,
                        "name": "Texas",
                        "country_id": 1228
                    },
                    {
                        "id": 1043,
                        "name": "Utah",
                        "country_id": 1228
                    },
                    {
                        "id": 1044,
                        "name": "Vermont",
                        "country_id": 1228
                    },
                    {
                        "id": 1045,
                        "name": "Virginia",
                        "country_id": 1228
                    },
                    {
                        "id": 1046,
                        "name": "Washington",
                        "country_id": 1228
                    },
                    {
                        "id": 1047,
                        "name": "West Virginia",
                        "country_id": 1228
                    },
                    {
                        "id": 1048,
                        "name": "Wisconsin",
                        "country_id": 1228
                    },
                    {
                        "id": 1049,
                        "name": "Wyoming",
                        "country_id": 1228
                    },
                    {
                        "id": 1050,
                        "name": "District of Columbia",
                        "country_id": 1228
                    },
                    {
                        "id": 1052,
                        "name": "American Samoa",
                        "country_id": 1228
                    },
                    {
                        "id": 1053,
                        "name": "Guam",
                        "country_id": 1228
                    },
                    {
                        "id": 1055,
                        "name": "Northern Mariana Islands",
                        "country_id": 1228
                    },
                    {
                        "id": 1056,
                        "name": "Puerto Rico",
                        "country_id": 1228
                    },
                    {
                        "id": 1057,
                        "name": "Virgin Islands",
                        "country_id": 1228
                    },
                    {
                        "id": 1058,
                        "name": "United States Minor Outlying Islands",
                        "country_id": 1228
                    },
                    {
                        "id": 1059,
                        "name": "Armed Forces Europe",
                        "country_id": 1228
                    },
                    {
                        "id": 1060,
                        "name": "Armed Forces Americas",
                        "country_id": 1228
                    },
                    {
                        "id": 1061,
                        "name": "Armed Forces Pacific",
                        "country_id": 1228
                    }
                ])
        }
    });
};

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