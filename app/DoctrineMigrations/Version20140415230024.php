<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20140415230024 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is autogenerated, please modify it to your needs
        $this->addSql("ALTER TABLE `question` DROP  `targetId`");
        $this->addSql("ALTER TABLE `question` DROP `targetType`");
        $this->addSql("ALTER TABLE `question_category` DROP `targetId`");
        $this->addSql("ALTER TABLE `question_category` DROP `targetType`");
        $this->addSql("ALTER TABLE `question_favorite` DROP `targetId`");
        $this->addSql("ALTER TABLE `question_favorite` DROP `targetType`");
        $this->addSql("ALTER TABLE `testpaper` DROP `targetId`");
        $this->addSql("ALTER TABLE `testpaper` DROP `targetType`");
        $this->addSql("ALTER TABLE `testpaper_result` DROP `targetType`");
        $this->addSql("ALTER TABLE `testpaper_result` DROP `targetId`");
        $this->addSql("ALTER TABLE  `course_lesson` CHANGE  `type`  `type` VARCHAR( 64 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  'text';");

    }

    public function down(Schema $schema)
    {
        // this down() migration is autogenerated, please modify it to your needs

    }
}
