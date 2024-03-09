
-- --------------------------------------------------------

--
-- Structure for view `agloa_player_export`
--
DROP TABLE IF EXISTS `agloa_player_export`;

DROP VIEW IF EXISTS `agloa_player_export`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_player_export`  AS SELECT `alatpd`.`player_id` AS `PlayerID`, `cc`.`last_name` AS `last_name`, `cc`.`first_name` AS `first_name`, `argc`.`group_id` AS `DistrictID`, `argc`.`title` AS `DistrictName`, `alatpd`.`EQ` AS `E`, `alatpd`.`OS` AS `O`, `alatpd`.`LI` AS `L`, `alatpd`.`PROP` AS `P`, `alatpd`.`PREZ` AS `M`, `alatpd`.`WE` AS `A`, `alatpd`.`WFF` AS `W`, `alatpd`.`CE` AS `C` FROM ((`agloa_latest_active_player_data` `alatpd` left join `civicrm_contact` `cc` on((`cc`.`id` = `alatpd`.`player_id`))) left join `active_registration_group_contacts` `argc` on((`argc`.`contact_id` = `alatpd`.`player_id`))) ;
