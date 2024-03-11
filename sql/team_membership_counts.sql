CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `team_membership_counts` AS
    SELECT 
        `team_membership`.`team_id` AS `team_id`,
        `team`.`number` AS `number`,
        COUNT(0) AS `team_membership_count`
    FROM
        (`team_membership`
        JOIN `team` ON ((`team`.`id` = `team_membership`.`team_id`)))
    GROUP BY `team_membership`.`team_id`
