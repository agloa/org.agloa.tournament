CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `agloa`.`agloa_teams_mart` AS
    SELECT 
        `agloa`.`team_members`.`id` AS `id`,
        `agloa`.`team_members`.`title` AS `title`,
        `agloa`.`team_members`.`is_active` AS `is_active`,
        `agloa`.`team_members`.`is_hidden` AS `is_hidden`,
        `agloa`.`team_members`.`created_id` AS `created_id`,
        `agloa`.`team_members`.`created_name` AS `created_name`,
        `agloa`.`team_members`.`members` AS `members`,
        `agloa`.`team_details`.`coaches` AS `coaches`,
        `agloa`.`team_details`.`equations_flight` AS `equations_flight`,
        `agloa`.`team_details`.`on_sets_flight` AS `on_sets_flight`,
        `agloa`.`team_details`.`linguishtik_flight` AS `linguishtik_flight`,
        `agloa`.`team_details`.`propaganda_flight` AS `propaganda_flight`,
        `agloa`.`team_details`.`presidents_flight` AS `presidents_flight`,
        `agloa`.`team_details`.`theme_flight` AS `theme_flight`,
        `agloa`.`team_details`.`current_events_flight` AS `current_events_flight`,
        `agloa`.`team_details`.`wff_n_proof_flight` AS `wff_n_proof_flight`,
        `agloa`.`team_details`.`district_equations_seed` AS `district_equations_seed`,
        `agloa`.`team_details`.`district_on_sets_seed` AS `district_on_sets_seed`,
        `agloa`.`team_details`.`district_linguishtik_seed` AS `district_linguishtik_seed`,
        `agloa`.`team_details`.`district_wff_n_proof_seed` AS `district_wff_n_proof_seed`,
        `agloa`.`team_details`.`league_equations_seed` AS `league_equations_seed`,
        `agloa`.`team_details`.`league_on_sets_seed` AS `league_on_sets_seed`,
        `agloa`.`team_details`.`league_linguishtik_seed` AS `league_linguishtik_seed`,
        `agloa`.`team_details`.`league_wff_n_proof_seed` AS `league_wff_n_proof_seed`
    FROM
        (`agloa`.`tournament_team_members` `team_members`
        JOIN `agloa`.`agloa_team_details` `team_details` ON ((`agloa`.`team_members`.`id` = `agloa`.`team_details`.`team_id`)))
