export const CandidateProfile = () => {
    const name = "Jamie"
    const role = "Web Developer"
    const yearsOfExperience = 2
    const isAvailable = true

    return (
        <>
            <h2>{name}</h2>
            <p>{role} with {yearsOfExperience} years of experience.</p>
            <p>Started in {2025 - yearsOfExperience}</p>
            <p>Status: {isAvailable ? "Available" : "Not Available"}</p>
            <p>Contact: {name.toLowerCase().replace(' ', '.')}@company.com</p>
        </>
    )
}