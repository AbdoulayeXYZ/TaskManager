CREATE TABLE `TaskManager`.`task` (
    `id` INT  AUTO_INCREMENT , 
    `description` VARCHAR NOT NULL , `
    status` VARCHAR NOT NULL , PRIMARY KEY (`id`)
) ENGINE = InnoDB;


INSERT INTO task (id, description, status)
VALUES 
	(1, "FAIRE LE COURS SQL", "urgent"),
    (2, "ALLER A L'ECOLE","urgent");
		