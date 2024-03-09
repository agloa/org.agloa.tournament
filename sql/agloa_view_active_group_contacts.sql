
-- --------------------------------------------------------

--
-- Structure for view `active_group_contacts`
--
DROP TABLE IF EXISTS `active_group_contacts`;

DROP VIEW IF EXISTS `active_group_contacts`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_group_contacts`  AS SELECT `civicrm_group_contact`.`group_id` AS `group_id`, `civicrm_group_contact`.`contact_id` AS `contact_id` FROM `civicrm_group_contact` WHERE (`civicrm_group_contact`.`status` like 'Added') ;
