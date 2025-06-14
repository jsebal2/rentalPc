-- CreateTable
CREATE TABLE `notification_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `notice_id` INTEGER NOT NULL,
    `sent_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `notification_log_user_id_idx`(`user_id`),
    INDEX `notification_log_notice_id_idx`(`notice_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notice_file` (
    `file_id` INTEGER NOT NULL AUTO_INCREMENT,
    `notice_id` INTEGER NOT NULL,
    `file_path` VARCHAR(255) NOT NULL,
    `original_name` VARCHAR(255) NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `notice_file_notice_id_idx`(`notice_id`),
    PRIMARY KEY (`file_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qna` (
    `qna_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `question` TEXT NOT NULL,
    `answer` TEXT NULL,
    `status` ENUM('UNANSWERED', 'ANSWERED', 'CLOSED') NOT NULL DEFAULT 'UNANSWERED',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `answered_at` DATETIME(3) NULL,

    INDEX `qna_user_id_idx`(`user_id`),
    PRIMARY KEY (`qna_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notice` (
    `notice_id` INTEGER NOT NULL AUTO_INCREMENT,
    `admin_id` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,
    `type` ENUM('GENERAL', 'MAINTENANCE', 'UPDATE', 'FAQ') NOT NULL,
    `file_path` VARCHAR(255) NULL,
    `pinned` BOOLEAN NULL DEFAULT false,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `notice_admin_id_idx`(`admin_id`),
    PRIMARY KEY (`notice_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `rental_id` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `method` ENUM('CARD', 'BANK_TRANSFER', 'PAYPAL') NULL,
    `status` ENUM('PENDING', 'PAID', 'FAILED') NULL,
    `paid_at` DATETIME(0) NULL,

    INDEX `payment_rental_id_idx`(`rental_id`),
    INDEX `payment_user_id_idx`(`user_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pc` (
    `pc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pcName` VARCHAR(100) NOT NULL DEFAULT '?뚯닔?놁쓬',
    `cpu` VARCHAR(50) NULL,
    `ram` VARCHAR(50) NULL,
    `graphic` VARCHAR(50) NULL,
    `state` ENUM('AVAILABLE', 'IN_USE', 'MAINTENANCE') NULL,
    `power_status` ENUM('ON', 'OFF') NULL,
    `user_id` INTEGER NULL,
    `renter_id` INTEGER NULL,
    `rental_status` ENUM('AVAILABLE', 'RENTED', 'RESERVED') NULL DEFAULT 'AVAILABLE',
    `price` INTEGER NULL,
    `reg_date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `memo` VARCHAR(255) NULL,

    INDEX `pc_user_id_idx`(`user_id`),
    INDEX `pc_renter_id_idx`(`renter_id`),
    PRIMARY KEY (`pc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rental` (
    `rental_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `pc_id` INTEGER NOT NULL,
    `start_date` DATETIME(0) NULL,
    `end_date` DATETIME(0) NULL,
    `auto_renew` BOOLEAN NULL DEFAULT false,
    `status` ENUM('PENDING', 'ACTIVE', 'ENDED', 'CANCELLED') NULL DEFAULT 'PENDING',
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `rental_pc_id_idx`(`pc_id`),
    INDEX `rental_user_id_idx`(`user_id`),
    PRIMARY KEY (`rental_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `role` ENUM('Customer', 'Seller', 'Admin') NOT NULL DEFAULT 'Customer',
    `status` ENUM('ACTIVE', 'INACTIVE', 'BANNED') NOT NULL DEFAULT 'ACTIVE',
    `two_factor_enabled` BOOLEAN NULL DEFAULT false,
    `join_date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `last_login` DATETIME(0) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_request` (
    `purchase_request_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pc_id` INTEGER NOT NULL,
    `buyer_id` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `requested_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `responded_at` DATETIME(3) NULL,

    INDEX `purchase_request_pc_id_idx`(`pc_id`),
    INDEX `purchase_request_buyer_id_idx`(`buyer_id`),
    PRIMARY KEY (`purchase_request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaction` (
    `transaction_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pc_id` INTEGER NOT NULL,
    `seller_id` INTEGER NOT NULL,
    `buyer_id` INTEGER NOT NULL,
    `request_id` INTEGER NOT NULL,
    `transaction_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('COMPLETED', 'CANCELLED', 'REFUNDED') NOT NULL DEFAULT 'COMPLETED',

    UNIQUE INDEX `transaction_request_id_key`(`request_id`),
    INDEX `transaction_pc_id_idx`(`pc_id`),
    INDEX `transaction_seller_id_idx`(`seller_id`),
    INDEX `transaction_buyer_id_idx`(`buyer_id`),
    PRIMARY KEY (`transaction_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lead_request` (
    `lead_request_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` INTEGER NULL,

    INDEX `lead_request_user_id_idx`(`user_id`),
    PRIMARY KEY (`lead_request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notification_log` ADD CONSTRAINT `fk_notification_user` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification_log` ADD CONSTRAINT `fk_notification_notice` FOREIGN KEY (`notice_id`) REFERENCES `notice`(`notice_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notice_file` ADD CONSTRAINT `fk_notice_file_notice` FOREIGN KEY (`notice_id`) REFERENCES `notice`(`notice_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `qna` ADD CONSTRAINT `qna_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notice` ADD CONSTRAINT `notice_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_rental_id_fkey` FOREIGN KEY (`rental_id`) REFERENCES `rental`(`rental_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pc` ADD CONSTRAINT `pc_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pc` ADD CONSTRAINT `pc_renter_id_fkey` FOREIGN KEY (`renter_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rental` ADD CONSTRAINT `rental_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rental` ADD CONSTRAINT `rental_pc_id_fkey` FOREIGN KEY (`pc_id`) REFERENCES `pc`(`pc_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase_request` ADD CONSTRAINT `purchase_request_pc_id_fkey` FOREIGN KEY (`pc_id`) REFERENCES `pc`(`pc_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase_request` ADD CONSTRAINT `purchase_request_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_pc_id_fkey` FOREIGN KEY (`pc_id`) REFERENCES `pc`(`pc_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_request_id_fkey` FOREIGN KEY (`request_id`) REFERENCES `purchase_request`(`purchase_request_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lead_request` ADD CONSTRAINT `lead_request_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

