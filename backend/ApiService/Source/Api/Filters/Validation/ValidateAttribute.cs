﻿namespace Epam.ItMarathon.ApiService.Api.Filters.Validation
{
    /// <summary>
    /// Marker attribute for api request parameters that should be validated.
    /// </summary>
    [AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false)]
    public class ValidateAttribute : Attribute
    {
    }
}
