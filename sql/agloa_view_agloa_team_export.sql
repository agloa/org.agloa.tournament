
-- --------------------------------------------------------

--
-- Structure for view `agloa_team_export`
--
DROP TABLE IF EXISTS `agloa_team_export`;

DROP VIEW IF EXISTS `agloa_team_export`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_team_export`  AS SELECT `aatc`.`team_id` AS `ID`, `aatc`.`team_name` AS `Name`, `aatc`.`created_id` AS `created_id`, `aatc`.`registration_group_id` AS `DistrictID`, `aatc`.`registration_group` AS `DistrictName`, `aatc`.`EQ` AS `E`, `aatc`.`OS` AS `O`, `aatc`.`LI` AS `L`, `aatc`.`PROP` AS `P`, `aatc`.`PREZ` AS `M`, `aatc`.`WE` AS `A`, `aatc`.`WFF` AS `W`, `aatc`.`CE` AS `C`, `atp5`.`P1` AS `P1`, `atp5`.`P2` AS `P2`, `atp5`.`P3` AS `P3`, `atp5`.`P4` AS `P4`, `atp5`.`P5` AS `P5`, `aatc`.`equations_section` AS `SBE`, `aatc`.`on_sets_section` AS `SBO`, `aatc`.`linguishtik_section` AS `SBL`, `aatc`.`wff_n_proof_section` AS `SBW`, `aatc`.`district_equations_seed` AS `ESEED`, `aatc`.`district_on_sets_seed` AS `OSEED`, `aatc`.`district_linguishtik_seed` AS `LSEED`, `aatc`.`district_wff_n_proof_seed` AS `WSEED`, `aatc`.`league_equations_seed` AS `league_equations_seed`, `aatc`.`league_on_sets_seed` AS `league_on_sets_seed`, `aatc`.`league_linguishtik_seed` AS `league_linguishtik_seed`, `aatc`.`league_wff_n_proof_seed` AS `league_wff_n_proof_seed` FROM (`agloa_active_team_competitions` `aatc` join `active_team_players_5` `atp5` on((`aatc`.`team_id` = `atp5`.`team_id`))) ;
