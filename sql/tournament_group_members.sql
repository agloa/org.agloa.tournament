CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `agloa`.`tournament_group_members` AS
    SELECT 
        `agloa`.`civicrm_group_contact`.`id` AS `id`,
        `agloa`.`civicrm_group_contact`.`group_id` AS `group_id`,
        `agloa`.`civicrm_group_contact`.`contact_id` AS `person_id`,
        `agloa`.`civicrm_group_contact`.`status` AS `status`
    FROM
        `agloa`.`civicrm_group_contact`
