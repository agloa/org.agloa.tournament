CREATE  OR REPLACE VIEW `tournament_people` AS
SELECT id,contact_sub_type,sort_name,display_name,nick_name,external_identifier,first_name,middle_name, last_name, birth_date, is_deceased 
FROM agloa.civicrm_contact
WHERE contact_type LIKE 'Individual';
