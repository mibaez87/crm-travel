INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Let's All Go Travel Company", "Kim Figueroa", 
    "Kim@LAG.com", "EWR", "Check");

INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Musicians Tour Company", "Dan Richards", 
    "Dan@MTC.com", "IAH", "Visa");

INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Cheer Spirit USA", "Becca Caller", 
    "becca.caller@cheeron.com", "MCO", "Mastercard");
    
INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("Teen Euro Tours", "Sam Thristle", 
    "Sam.thristle@aol.com", "LGA", "Visa");

INSERT INTO clients (client_name, primary_contact, primary_email,
    preferred_dep_airport, payment_type)
    VALUES
    ("From Coast to Coast US Tours", "Alex Seethread", 
    "AlexS.@msn.com", "BNA", "Check");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (1, "2018-07-19", "B6 1905", "EWR", 1958,
    "2018-07-22", "B6 706", "FLL", 1900, 85,
    "2018-04-18", "2018-05-18", "2018-06-19");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (1, "2018-09-07", "AS 1169", "EWR", 1745,
    "2018-09-12", "AS 1162", "LAX", 0845, 110,
    "2018-06-08", "2018-07-06", "2018-08-08");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (2, "2018-08-01", "UA 676", "IAH", 1640,
    "2018-08-08", "UA 1235", "DCA", 1430, 42,
    "2018-05-03", "2018-06-01", "2018-07-02");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (1, "2018-02-24", "AS 1358", "EWR", 1432,
    "2018-03-05", "AS 1352 ", "LGA", 1621, 30,
    "2017-10-11", "2018-12-15", "2018-12-17");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (3, "2018-02-24", "JBU 537", "MCO", 1640,
    "2018-03-12", "JBU 540", "LAX", 1821, 24,
    "2017-09-22", "2018-11-05", "2018-11-12");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (4, "2018-03-15", "AA 740", "LGA", 1640,
    "2018-03-29", "BA 1035", "LHR", 1225, 15,
    "2017-08-04", "2018-11-02", "2018-11-20");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (2, "2018-03-12", "UA 780", "IAH", 1345,
    "2018-03-22", "UA 1075", "BNA", 1330, 8,
    "2018-01-04", "2018-01-17", "2018-02-01");

INSERT INTO trips (client_id, dep_date, dep_flight, dep_airport, dep_time,
    arr_date, arr_flight, arr_airport, arr_time, num_passengers, deposit_due,
    cancellation_deadline, final_payment)
    VALUES
    (5, "2018-03-30", "JBU 1143", "BNA", 1023,
    "2018-04-05", "JBU 1149", "DCA", 1245, 15,
    "2018-01-28", "2018-02-05", "2018-02-17");
