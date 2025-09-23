﻿using FluentValidation.Results;

namespace Epam.ItMarathon.ApiService.Domain.Shared.ValidationErrors
{
    /// <summary>
    /// Represents a "Not Authorized" validation error with HTTP status code 401.
    /// </summary>
    public class NotAuthorizedError(IEnumerable<ValidationFailure> failures) : ValidationResult(failures);
}