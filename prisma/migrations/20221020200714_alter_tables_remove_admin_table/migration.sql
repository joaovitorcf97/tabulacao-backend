/*
  Warnings:

  - You are about to drop the column `adminId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `client` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_adminId_fkey";

-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_adminId_fkey";

-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_userId_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_adminId_fkey";

-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "category" DROP COLUMN "adminId",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "client" DROP COLUMN "adminId";

-- DropTable
DROP TABLE "user";

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
