const companies =
{
    "Google": 
    {
        people: ["Володя", "Петя", "Александр"]
    },
    "Microsoft": 
    {
        people: ["Артём", "Ваня", "Родион"]
    },
    "Vk": 
    {
        people: ["Кирилл", "Ваня", "Анакендий"]
    }
};

for (const companyName in companies) 
{
    console.log(`Сотрудники компании ${companyName}:`);

    for (const peopleName of companies[companyName].people) 
    {
        console.log(peopleName);
    }
}