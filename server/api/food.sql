DROP table if EXISTS foods CASCADE;

CREATE TABLE foods (
    id   SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30),
    category VARCHAR(30),
    calories INTEGER NOT NULL,
    totalFat FLOAT NOT NULL,
    satFat FLOAT NOT NULL,
    transFat FLOAT NOT NULL,
    protein FLOAT NOT NULL,
    carb FLOAT NOT NULL
);

INSERT INTO foods(name, category, calories, totalFat, satFat, transFat, protein, carb)
        VALUES ('Steak', 'Protein', 300, 5.73, 2.183, 0.182, 29.44, 0.0),
        ('Ground Beef', 'Protein', 200, 13.1, 2.183, 0.182, 29.44, 0.0),
        ('Chicken', 'Protein', 100, 9.3, 2.183, 0.182, 29.44, 0.0),
        ('Fish', 'Protein', 80, 6.34, 2.183, 0.182, 29.44, 0.0),
        ('Soy', 'Protein', 50, 19.94, 2.183, 0.182, 29.44, 0.0),
                ('Orange', 'Fruits', 300, 0.12, 2.183, 0.182, 29.44, 0.0),
        ('Banana', 'Fruits', 200, 5.73, 0.33, 0.182, 29.44, 0.0),
        ('Pineapple', 'Fruits', 100, 0.12, 2.183, 0.182, 29.44, 0.0),
        ('Grapes', 'Fruits', 80, 5.73, 0.16, 0.182, 29.44, 0.0),
        ('Blueberries', 'Fruits', 50, 0.33, 2.183, 0.182, 29.44, 0.0),
                ('Romain', 'Vegetables', 30, 0.3, 2.183, 0.182, 29.44, 0.0),
        ('Green Beans', 'Vegetables', 40, 0.22, 2.183, 0.182, 29.44, 0.0),
        ('Squach', 'Vegetables', 100, 0.2, 2.183, 0.182, 29.44, 0.0),
        ('Spinach', 'Vegetables', 50, 0.4, 2.183, 0.182, 29.44, 0.0),
        ('Kale', 'Vegetables', 10, 0.9, 2.183, 0.182, 29.44, 0.0),
                ('Milk', 'Dairy', 300, 3.9, 2.183, 0.182, 29.44, 0.0),
        ('Yogurt', 'Dairy', 200, 5.0, 2.183, 0.182, 29.44, 0.0),
        ('Cheddar Cheese', 'Dairy', 200, 9.0, 2.183, 0.182, 29.44, 0.0),
        ('Skim Milk', 'Dairy', 100, 0.2, 2.183, 0.182, 29.44, 0.0),
        ('Cottage Cheese', 'Dairy', 80, 4.3, 2.183, 0.182, 29.44, 0.0),
                ('Bread', 'Grains', 200, 1.1, 2.183, 0.182, 29.44, 0.0),
        ('Bagel', 'Grains', 300, 1.7, 2.183, 0.182, 29.44, 0.0),
        ('pita', 'Grains', 250, 1.7, 2.183, 0.182, 29.44, 0.0),
        ('naan', 'Grains', 210, 3.3, 2.183, 0.182, 29.44, 0.0),
        ('tortilla', 'Grains', 120, 0.5, 2.183, 0.182, 29.44, 0.0);
        -- satFat, transFat, protein, carb not done