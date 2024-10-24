/*
  Warnings:

  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "role" "Roles" NOT NULL;
