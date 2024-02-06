create table inputData if not exists (
    id: serial primary key,
    creditAmount: int,
    interestRate: int,
    numberOfMonth: int,
    currentDate: DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
);