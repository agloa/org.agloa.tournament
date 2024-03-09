
--
-- Constraints for dumped tables
--

--
-- Constraints for table `agloa_competition_styles`
--
ALTER TABLE `agloa_competition_styles`
  ADD CONSTRAINT `agloa_competition_styles_ibfk_1` FOREIGN KEY (`competition_style`) REFERENCES `competition_style` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `civicrm_activity`
--
ALTER TABLE `civicrm_activity`
  ADD CONSTRAINT `FK_civicrm_activity_parent_id` FOREIGN KEY (`parent_id`) REFERENCES `civicrm_activity` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `civicrm_afform_submission`
--
ALTER TABLE `civicrm_afform_submission`
  ADD CONSTRAINT `FK_civicrm_afform_submission_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `civicrm_contact` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `civicrm_job_log`
--
ALTER TABLE `civicrm_job_log`
  ADD CONSTRAINT `FK_civicrm_job_log_job_id` FOREIGN KEY (`job_id`) REFERENCES `civicrm_job` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `civicrm_mailing_event_queue`
--
ALTER TABLE `civicrm_mailing_event_queue`
  ADD CONSTRAINT `civicrm_mailing_event_queue_ibfk_1` FOREIGN KEY (`mailing_id`) REFERENCES `civicrm_mailing` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_civicrm_mailing_event_queue_job_id` FOREIGN KEY (`job_id`) REFERENCES `civicrm_mailing_job` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `civicrm_mail_settings`
--
ALTER TABLE `civicrm_mail_settings`
  ADD CONSTRAINT `FK_civicrm_mail_settings_campaign_id` FOREIGN KEY (`campaign_id`) REFERENCES `civicrm_campaign` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `competition_style_sections`
--
ALTER TABLE `competition_style_sections`
  ADD CONSTRAINT `competition_style_sections_ibfk_1` FOREIGN KEY (`competition_style`) REFERENCES `competition_style` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
