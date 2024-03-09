CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `agloa`.`tournament_team_members` AS
    SELECT 
        `agloa`.`teams`.`id` AS `id`,
        `agloa`.`teams`.`title` AS `title`,
        `agloa`.`teams`.`is_active` AS `is_active`,
        `agloa`.`teams`.`is_hidden` AS `is_hidden`,
        `agloa`.`teams`.`created_id` AS `created_id`,
        `agloa`.`teams`.`created_name` AS `created_name`,
        GROUP_CONCAT(`agloa`.`people`.`display_name`
            SEPARATOR ',') AS `members`
    FROM
        ((`agloa`.`tournament_teams` `teams`
        JOIN `agloa`.`tournament_group_members` `group_members` ON (((`agloa`.`group_members`.`group_id` = `agloa`.`teams`.`id`)
            AND (`agloa`.`group_members`.`status` <> 'Removed'))))
        JOIN `agloa`.`tournament_people` `people` ON ((`agloa`.`people`.`id` = `agloa`.`group_members`.`person_id`)))
    GROUP BY `agloa`.`teams`.`id`
