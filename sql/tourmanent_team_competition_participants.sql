CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `tourmanent_team_competition_participants` AS
    SELECT 
        `team`.`id` AS `team_id`,
        `team`.`number` AS `number`,
        `team`.`name` AS `name`,
        `team_competition_registration`.`competition_id` AS `competition_id`,
        `tournament_team_participant`.`participant_id` AS `participant_id`
    FROM
        (((`tournament_team_participant`
        JOIN `team_registration` ON ((`team_registration`.`id` = `tournament_team_participant`.`team_registration_id`)))
        JOIN `team_competition_registration` ON ((`team_competition_registration`.`team_registration_id` = `team_registration`.`id`)))
        JOIN `team` ON ((`team`.`id` = `team_registration`.`team_id`)))
