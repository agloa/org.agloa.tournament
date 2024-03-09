
-- --------------------------------------------------------

--
-- Structure for view `billing_contact_relationship_type`
--
DROP TABLE IF EXISTS `billing_contact_relationship_type`;

DROP VIEW IF EXISTS `billing_contact_relationship_type`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `billing_contact_relationship_type`  AS SELECT `civicrm_relationship_type`.`id` AS `id` FROM `civicrm_relationship_type` WHERE (`civicrm_relationship_type`.`label_a_b` like 'Billing Contact for') ;
