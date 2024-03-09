CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `agloa`@`%` 
    SQL SECURITY DEFINER
VIEW `agloa`.`agloa_team_details` AS
    SELECT 
        `agloa`.`civicrm_value_team_data_7`.`id` AS `id`,
        `agloa`.`civicrm_value_team_data_7`.`entity_id` AS `team_id`,
        `agloa`.`civicrm_value_team_data_7`.`coaches_85` AS `coaches`,
        `agloa`.`civicrm_value_team_data_7`.`equations_21` AS `equations_flight`,
        `agloa`.`civicrm_value_team_data_7`.`on_sets_22` AS `on_sets_flight`,
        `agloa`.`civicrm_value_team_data_7`.`linguishtik_23` AS `linguishtik_flight`,
        `agloa`.`civicrm_value_team_data_7`.`propaganda_24` AS `propaganda_flight`,
        `agloa`.`civicrm_value_team_data_7`.`presidents_25` AS `presidents_flight`,
        `agloa`.`civicrm_value_team_data_7`.`world_events_26` AS `theme_flight`,
        `agloa`.`civicrm_value_team_data_7`.`wff_n_proof_27` AS `wff_n_proof_flight`,
        `agloa`.`civicrm_value_team_data_7`.`current_events_74` AS `current_events_flight`,
        `agloa`.`civicrm_value_team_data_7`.`district_equations_seed_29` AS `district_equations_seed`,
        `agloa`.`civicrm_value_team_data_7`.`district_on_sets_seed_31` AS `district_on_sets_seed`,
        `agloa`.`civicrm_value_team_data_7`.`district_linguishtik_seed_33` AS `district_linguishtik_seed`,
        `agloa`.`civicrm_value_team_data_7`.`district_wff_n_proof_seed_35` AS `district_wff_n_proof_seed`,
        `agloa`.`civicrm_value_team_data_7`.`league_equations_seed_30` AS `league_equations_seed`,
        `agloa`.`civicrm_value_team_data_7`.`league_on_sets_seed_32` AS `league_on_sets_seed`,
        `agloa`.`civicrm_value_team_data_7`.`league_linguishtik_seed_34` AS `league_linguishtik_seed`,
        `agloa`.`civicrm_value_team_data_7`.`league_wff_n_proof_seed_36` AS `league_wff_n_proof_seed`,
        `agloa`.`civicrm_value_team_data_7`.`equations_section_75` AS `equations_section`,
        `agloa`.`civicrm_value_team_data_7`.`on_sets_section_76` AS `on_sets_section`,
        `agloa`.`civicrm_value_team_data_7`.`linguishtik_section_77` AS `linguishtik_section`,
        `agloa`.`civicrm_value_team_data_7`.`wff_n_proof_section_78` AS `wff_n_proof_section`
    FROM
        `agloa`.`civicrm_value_team_data_7`
